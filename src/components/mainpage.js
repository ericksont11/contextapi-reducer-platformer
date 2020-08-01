import React from 'react';
import UserCharacter from './user_character'
import EnemyCharacters from './enemy_characters';
import EnemyContextProvider from '../contexts/enemy_context';
import Level from './level';
import Flag from './flag';

const MainPage = () => {
 
  return  (
    <div style={{width:'100vw', height:'100vh', background:'linear-gradient(to bottom, blue 0%, blue 90%, green 90%, green 100%)'}}>
      <Flag/>
      <Level
        top='79.875%'
        width='20vw'
        left='80%'
      />
      <Level
        top='61.7%'
        width='100vw'
        left='0%'
      />
      <Level
        top='43.625%'
        width='20vw'
        left='0%'
      />
      <Level
        top='25.5%'
        width='100vw'
        left='0%'
      />
      <UserCharacter/>
      <EnemyContextProvider>
        <EnemyCharacters/>
      </EnemyContextProvider>
    </div>
  ) 
}

export default MainPage;