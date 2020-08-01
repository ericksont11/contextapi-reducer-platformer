import React, { createContext, useReducer } from 'react';
import { characterReducer } from '../reducers/character_reducer';

export const CharacterContext = createContext();

const position = {
  name: 'Austin',
  top: '93%',
  left: '1%',
  jumpSpeed: 10,
  speed: 1,
  jumping: false,
  width: '5vw',
  height: '5vh',
  level: 0
}


const CharacterContextProvider = props => {
  const [characterAttributes, dispatch] = useReducer(characterReducer, position); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  return (
    <CharacterContext.Provider value={{ characterAttributes, dispatch }}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;