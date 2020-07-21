import React from 'react';
import Knight from './Knight'
import Square from './Square'
function App() {
  return (
    <div className="App">
        <Square black>
            <Knight/>
        </Square>

    </div>
  );
}

export default App;
