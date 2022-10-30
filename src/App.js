import React from 'react';

function App() {
  const [number, setNumber] = React.useState([1, 2, 3, 5, 7, 9, 12, 345, 67, 456, 123, 34, 4, 4, 5, 6, 7, 8, 9]);
  const [filterNumber, setFilterNumber] = React.useState();

  const numberAdd = () => {
    const n = Math.round((Math.random() * 1000).toFixed(3));
    setNumber([...number, n]);
  }

  const filter = (value) => {
    // debugger;
    setFilterNumber(+value)
  }

  return (
    <div className='App'>
      <ul>
        {
          number.filter((n) => filterNumber ? (n === filterNumber) : (true))
            .map((n, i) => (
              <li key={i}>{n}</li>
            ))
        }
        <button onClick={numberAdd}>Новое число</button>
        <textarea onChange={(e) => filter(e.target.value)}></textarea>
      </ul>
    </div>
  );
}

export default App;
