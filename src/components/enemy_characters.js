
import React, { useContext, useEffect } from 'react';
import { EnemyContext } from '../contexts/enemy_context';
import { CharacterContext} from '../contexts/character_context';
let enemies, character = {}

const EnemyCharacters = () => {
    enemies = useContext(EnemyContext);
    character = useContext(CharacterContext);
    let movement = []
    useEffect(() => {
        for(let i=0; i< enemies.enemyAttributes.length; i++){
            let counter = i
            movement[counter] = 'left'
            setInterval(()=>{
                const enemyPosition = parseFloat(enemies.enemyAttributes[counter].left)
                const characterPosition = parseFloat(character.characterAttributes.left)
                const enemyWidth = parseFloat(enemies.enemyAttributes[counter].width)
                const characterWidth = parseFloat(character.characterAttributes.width)
                const characterBottom = parseFloat(character.characterAttributes.top) + parseFloat(character.characterAttributes.height)
                const enemyTop = parseFloat(enemies.enemyAttributes[counter].top)
                const characterLevel = parseFloat(character.characterAttributes.level)
                const enemyLevel = parseFloat(enemies.enemyAttributes[counter].level)
                if(movement[counter] === 'left') {
                    if(enemyPosition <= characterPosition + characterWidth && enemyPosition + enemyWidth > characterPosition  &&  enemyTop < characterBottom && characterLevel === enemyLevel){
                        for (let j=0; j<movement.length; j++){
                            movement[counter] = 'left'
                        }
                        enemies.dispatch('RESET')
                        character.dispatch({type:'RESET'})
                        window.location.reload();
                    } else if(enemyPosition === 0){
                        movement[counter] = 'right'
                    } else {
                        enemies.dispatch('MOVE_LEFT_'+counter)
                    }
                } else {
                    if(enemyPosition + enemyWidth >= characterPosition && enemyPosition  < characterPosition + characterWidth && enemyTop < characterBottom && characterLevel === enemyLevel){
                        for (let j=0; j<movement.length; j++){
                            movement[counter] = 'left'
                        }
                        enemies.dispatch('RESET')
                        character.dispatch({type:'RESET'})
                        window.location.reload();
                    } else if(enemyPosition == 50){
                        movement[counter] = 'left'
                    } else {
                        enemies.dispatch('MOVE_RIGHT_'+counter)
                    }
                }
            },50)
        }  
    }, [])

    return (
      <div className="Enemy-list">
        {enemies.enemyAttributes.map(enemies => {
            return ( 
                <div className={enemies.name} key={enemies.name} style={{position:'absolute', textAlign:'center', lineHeight:enemies.height, color: 'white', fontSize: '1vw', height:enemies.height, width: enemies.width, backgroundColor:'gray', top:enemies.top, left:enemies.left}}>{enemies.name}</div>
            )
          })}
      </div>
    ) 
  }
  
  export default EnemyCharacters;