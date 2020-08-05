  
import React from 'react';
import MainPage from './components/mainpage';
import CharacterContextProvider from './contexts/character_context';
import EnemyContextProvider from './contexts/enemy_context';
import StartModal from './components/start_modal';


function App() {
  return (
    <div className="App">
      <CharacterContextProvider>
        <EnemyContextProvider>
          <StartModal/>
          <MainPage/>
        </EnemyContextProvider>
      </CharacterContextProvider>
    </div>
  );
}

export default App;