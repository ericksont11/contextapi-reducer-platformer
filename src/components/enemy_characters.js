
import React, { useContext, useEffect } from 'react';
import { EnemyContext } from '../contexts/enemy_context';
let enemies

const EnemyCharacters = () => {
    enemies = useContext(EnemyContext);


    return (
      <div className="Enemy-list">
        {enemies.enemyAttributes.map(enemies => {
            return ( 
                <div className={enemies.name} key={enemies.name} style={{position:'absolute', textAlign:'center', lineHeight:enemies.height, color: 'white', fontSize: '2rem', height:enemies.height, width: enemies.width, backgroundColor:'gray', top:enemies.top, left:enemies.left}}>{enemies.name}</div>
            )
          })}
      </div>
    ) 
  }
  
  export default EnemyCharacters;