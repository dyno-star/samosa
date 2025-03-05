import './App.css'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  };

  return (
    <div className="App">
      <div className="container">
        <div className='upgrade'>
          <h3>Upgrade</h3>
          <p>Description of upgrade</p>
        </div>
        </div>
      <header className="App-header">
        <h1>Samosa Selector</h1>
        <h2> Count: {count}</h2>
        <img
          src="./images/samosa.jpg" 
          onClick={updateCount} 
          alt="Samosa"
          style={{ cursor: 'pointer', width: '200px' }}
        />
      </header>
    </div>
  );
}

export default App;