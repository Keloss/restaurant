import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
  render() {
    let count = 0
    return (
      <div className='item'>
        <img src={'./img/' + this.props.item.img} alt=''/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}₽</p>
        <p className='count'>{this.props.item.count}</p>
        <div className='plus' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        <div className='minus' onClick={() => this.props.delCount(this.props.item)}>-</div>
        <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
          
      </div>
    )
  }
}

export default Order