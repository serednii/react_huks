import React from 'react';
import { Collection } from './Collection'
import './index.scss';

// https://635d74d2ea764497f0dd237e.mockapi.io/Collections
// https://635d74d2ea764497f0dd237e.mockapi.io/Collections
function App() {

  const temp = [];

  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    fetch('https://635d74d2ea764497f0dd237e.mockapi.io/Collections')
      .then((res) => res.json)
      .then((json) => {
        temp = json;
        // setCollections(json);
        console.log(json)
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении даних');
      })
  });


  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {/* {
          collections.map((obj) => (
            <Collection name={obj.name} images={obj.images} />
          ))
        } */}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
