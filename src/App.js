import React from 'react';
import logo from './logo.svg';
import './App.css';
import State from './CounterC.js'
import StateF from './CounterF.js'
import Todo from './todo.js'
import Stopwatch from './sw.js'
import BasicExample from './ind'
import Table from './Table.js'
import Home from "./user/home"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Table/> */}
        {/* <BasicExample/> */}
        <Home/>
      </header>
    </div>
  );
}

export default App;
