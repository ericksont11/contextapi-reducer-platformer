import React, { createContext, useReducer } from 'react';
import { enemyReducer } from '../reducers/enemy_reducer';

export const EnemyContext = createContext();

const enemies = [
  {
      left: '30%',
      top: '93%',
      name: '^ - ^',
      height: '5vh',
      width: '5vw',
      level: 0
  },
  {
      left: '70%',
      top: '93%',
      name: '^ _ ^',
      height: '5vh',
      width: '5vw',
      level: 0
  },
  {
      left: '60%',
      top: '56.75%',
      name: '^ . ^',
      height: '5vh',
      width: '5vw',
      level: 2
  },
  {
      left: '10%',
      top: '56.75%',
      name: '` . `',
      height: '5vh',
      width: '5vw',
      level: 2
  },
  {
      left: '60%',
      top: '20.5%',
      name: 'o_o',
      height: '5vh',
      width: '5vw',
      level: 4
  },
  {
      left: '10%',
      top: '20.5%',
      name: '`0_0`',
      height: '5vh',
      width: '5vw',
      level: 4
  }
]


const EnemyContextProvider = props => {
  const [enemyAttributes, dispatch] = useReducer(enemyReducer, enemies); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  return (
    <EnemyContext.Provider value={{ enemyAttributes, dispatch }}>
      {props.children}
    </EnemyContext.Provider>
  );
};

export default EnemyContextProvider;