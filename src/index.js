import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Levinni a kutyát", completed: false },
  { id: "todo-1", name: "Dolgozni menni", completed: false },
  { id: "todo-2", name: "Túlélni", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
