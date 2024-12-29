import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import Order from './Order.js';
import { BrowserRouter as Router, Switch, Routes, Link, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar.js';
import AppRouter from './AppRouter.js';


const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += (Number.parseFloat(el.price)) * Number.parseFloat(el.count) )
  return(<div>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} onAdd={props.onAdd} delCount={props.delCount} key={el.id} item={el}/>
      ))}
    <p className='summa'>Общая сумма: {new Intl.NumberFormat().format(summa)}₽</p>
  </div>)
}


const showNothing = () => {
  return (<div className='empty'>
      <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {

  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>АВА</span>
            <NavBar/>
      
            <FaCartPlus onClick={() => setCartOpen(prevOpen => !prevOpen)} className={`cart-button ${cartOpen ? 'active' : ''}`}  />
            {console.log(cartOpen)}
            {cartOpen && (
              <div className='cart'>
                  {props.orders.length > 0 ? showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
