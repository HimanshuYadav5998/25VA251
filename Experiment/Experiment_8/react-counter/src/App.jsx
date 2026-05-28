import React, { useState } from 'react';
import './App.css'; // We will link it to App.css

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleDecrement = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="app-container">
      <header className="experiment-header">Experiment 08</header>
      <main className="counter-body">
        <h1 className="counter-title">React Counter</h1>
        <div className="counter-value">{count}</div>
      </main>
      <footer className="control-dock">
        <button className="btn" onClick={handleIncrement}>Increment (+)</button>
        <button className="btn" onClick={handleDecrement}>Decrement (-)</button>
        <button className="btn" onClick={handleReset}>Reset</button>
      </footer>
    </div>
  );
}

export default App;