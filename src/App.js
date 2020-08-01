  
import React from 'react';
import MainPage from './components/mainpage';
import CharacterContextProvider from './contexts/character_context';

function App() {
  return (
    <div className="App">
      <CharacterContextProvider>
        <MainPage/>
      </CharacterContextProvider>
    </div>
  );
}

export default App;