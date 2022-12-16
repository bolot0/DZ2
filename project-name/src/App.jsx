import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
function Lol() {
  return (
    <h1>АНИМЕ</h1>
  )
}
function Nem(props) {
  return (
    <li>{props.neme}</li>
  )
}

function App() {

  const AddBusked = () => {
    console.log("добавленно в корзину");
  }

  const add = () => {
    console.log("добавленно");
  }

  const inputChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <div className="App">

     <ul> <Lol />
      <Nem neme="атака титанов" />
      <Nem neme="код гиас" />
      <Nem neme="повелитель" />
      <Nem neme="тетрадь смерти" />
      </ul>

    
        <input type="text" name="post" onChange={inputChange}/>
        <button onClick={add}>Добавить</button>
        <button onClick={AddBusked}>Добавить в корзину</button>
    </div>
  )
}
  
      export default App
