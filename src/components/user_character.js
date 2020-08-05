import React, { useContext, useEffect} from 'react';
import { CharacterContext } from '../contexts/character_context';
import { EnemyContext } from '../contexts/enemy_context';
let character, enemies = {}


const UserCharacter = () => {
  character = useContext(CharacterContext);
  enemies = useContext(EnemyContext);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if(enemies.enemyAttributes[0].movement !== 'paused'){
        if (e.keyCode === 39 && parseInt(character.characterAttributes.left ) < 94&&
        (character.characterAttributes.level !== 3 ||  parseInt(character.characterAttributes.left) + parseInt(character.characterAttributes.width) < 20)){
          character.dispatch({type:'MOVE_RIGHT'})
          if (character.characterAttributes.level === 4 &&  parseInt(character.characterAttributes.left) > 75){
            alert('YOU WIN')
          }
        } else if (e.keyCode === 37 && (parseInt(character.characterAttributes.left) > 1 &&
        (character.characterAttributes.level != 1 ||  parseInt(character.characterAttributes.left) > 80))) {
          character.dispatch({type:'MOVE_LEFT'})
        } else if (e.keyCode === 38 && character.characterAttributes.jumping === false) {
          console.log(character.characterAttributes.level)
          if (parseInt(character.characterAttributes.left) >= 80 && character.characterAttributes.level < 2 ||
            parseInt(character.characterAttributes.left) + parseInt(character.characterAttributes.width)  <= 20 && (character.characterAttributes.level === 2 || character.characterAttributes.level === 3)) {
            let timer = 0
            for(let i=1; i < 7; i++){
              timer = timer + 100
              if (i < 5) {
                setTimeout(()=>{
                  character.dispatch({type:'MOVE_UP'})
                },timer)
              } else if (i < 6){
                setTimeout(()=>{
                  character.dispatch({type:'MOVE_DOWN'})
                },timer)
              } else {
                setTimeout(()=>{
                  character.dispatch({type:'LEVEL_UP'})
                }, timer)
              }
            }
          } else {
            let timer = 0
            for(let i=1; i < 11; i++){
              timer = timer + 100
              if (i < 5) {
                  setTimeout(()=>{
                    character.dispatch({type:'MOVE_UP'})
                  },timer)
              } else if (i === 5){
                  setTimeout(()=>{
                    character.dispatch({type:'BEGIN_FALLING'})
                  },timer)
              } else if (i < 9){
                  setTimeout(()=>{
                    character.dispatch({type:'MOVE_DOWN'})
                  },timer)
              } else {
                  setTimeout(()=>{
                    character.dispatch({type:'RESET_JUMP'})
                  }, timer)
              }
            }
          }
        }
        }
      })
  }, [])

  const style = {
      width: character.characterAttributes.width,
      height: character.characterAttributes.height,
      backgroundColor:'red',
      position: 'absolute',
      top: character.characterAttributes.top,
      left: character.characterAttributes.left
  }
 
  return  (
    <div id="Character" style={style}>
    </div>
  ) 
}

export default UserCharacter;