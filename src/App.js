import React from 'react';
import "./App.css";
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from './actions/index'

const App = () => {
  const myState = useSelector((state)=> state.changeTheNumber);

  const dispatch = useDispatch();


  return (
    <div className="app">
      <div className="container">
        <h1>Increment & Decrement Counter</h1>
        <h4>Using React & Redux</h4>
        <div className="quantity">
          <a className='quantity_minus' title='Decrement' onClick={()=> dispatch(decNumber())}><span>-</span></a>
          <input type="text" name='quantity' value={myState}/>
          <a className='quantity_plus' title='Increment' onClick={()=> dispatch(incNumber())}><span>+</span></a>
        </div>
      </div>
      </div>
  )
}

export default App
