import React from 'react';
import './App.css';

const data = [
  {name: 'Sohail', age: 23},
  {name: 'Ramzunnisa', age: 24},
  {name: 'Shoaib', age: 26},
];

const DataItem = ({name, age})=>{
  return(
    <li>
      <span>{name}{` `}</span>
      <span>{age}</span>
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <h2>Data List</h2>
      <ul>
        {data.map((dataItem, index) => {
          return(
            <DataItem
              name={dataItem.name}
              age={dataItem.age}
              key={`data-item-${index}`}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
