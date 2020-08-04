
import React, { useContext, useEffect } from 'react';
import { EnemyContext } from '../contexts/enemy_context';
import { CharacterContext} from '../contexts/character_context';
let enemies, character

const StartModal = (props) => {
    enemies = useContext(EnemyContext);
    character = useContext(CharacterContext);
    let movement = []
    let array = []
    let startEnemies = () => {
        if (enemies.enemyAttributes[0].movement = 'paused'){
            enemies.dispatch('START')
            for(let i=0; i< enemies.enemyAttributes.length; i++){
                let counter = i
                movement[counter] = 'left'
                array.push(setInterval(()=>{
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
                            for (let i=0; i<array.length; i++){
                                clearInterval(array[i])
                            }
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
                            for (let i=0; i<array.length; i++){
                                clearInterval(array[i])
                            }
                        } else if(enemyPosition == 50){
                            movement[counter] = 'left'
                        } else {
                            enemies.dispatch('MOVE_RIGHT_'+counter)
                        }
                    }
                },50))
            }  
            console.log(array)
        } else {
            console.log('not paused')
        }
    }
  return  (
    <div style={{position:'absolute', left: '25vw', top:'25vh', width:'50vw', height:'50vh', backgroundColor:'brown', zIndex:'2'}}>
        <button onClick={()=>startEnemies()} style={{height:'20vhind', width:'20vw', marginLeft:'15vw', marginTop:'15vh'}}>Start Game</button>
    </div>
  ) 
}

export default StartModal;