import React, { useState } from 'react';
import Game from './components/game'


function App() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="intro">
      {!playing ?
        <div className='title'>
          <h1>Welcome to Snake! <i className='jank'>Jank edition</i> </h1>
          <button className='start' onClick={() => {setPlaying(!playing)}}>Start!</button>
        </div> :
        <>
        <div className='game_title'>
          <h1>Playing Snake <i className='game_jank'>WAW</i></h1>             
        </div>
        <Game/>
        </>
           
      }
      
      
    </div>
  );
}

export default App;
