import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [date, setDate] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => {
        setDate(data.date);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <>{date}</>
      </header>
    </div>
  );
}

export default App;
