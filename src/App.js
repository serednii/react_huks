import React from 'react';
import { Collection } from './Collection'
import './index.scss';

const cats = [
  { "name": "Все" },
  { "name": "Море" },
  { "name": "Горы" },
  { "name": "Архитектура" },
  { "name": "Города" }
]


// https://635d74d2ea764497f0dd237e.mockapi.io/Collections
function App() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  const [collections, setCollections] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId ? `category=${categoryId}` : '';
    fetch(`https://635d74d2ea764497f0dd237e.mockapi.io/Collections?page=${page}&limit=3${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
        console.log(json)
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении даних');
      })
      .finally(() => setIsLoading(false))
  }, [categoryId, page]);



  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">

          {
            cats.map((obj, i) => (
              <li
                className={categoryId === i ? 'active' : ''}
                onClick={() => setCategoryId(i)}
                key={obj.name}
              > {obj.name} </li>
            ))
          }

        </ul>
        <input
          value={searchValue}
          className="search-input"
          placeholder="Поиск по названию"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка</h2>
        ) : (
          collections.filter((obj) => {
            return obj.name.toLowerCase().includes(searchValue.toLowerCase())
          })
            .map((obj) => (
              <Collection name={obj.name} images={obj.photos} />

            ))
        )}


      </div>
      <ul className="pagination">
        {
          [...Array(5)].map((_, i) => (
            <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</li>
          ))
        }


      </ul>
    </div>
  );
}

export default App;
