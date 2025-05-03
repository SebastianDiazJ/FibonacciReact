import React from 'react';
import FibonacciClock from './components/FibonacciClock'; // A
import './App.css'; // Importa los estilos globales si los tienes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FibonacciClock />
      </header>
    </div>
  );
}

export default App;