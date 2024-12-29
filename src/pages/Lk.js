import React, { Component } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from '../components/UserProfile';
import OrderHistory from '../components/OrderHistory';


export class Lk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Цезарь',
          img: 'Цезарь.png',
          desc: 'Description about meal',
          category: 'salats',
          price: '380'
        },
        {
          id: 2,
          title: 'Кола',
          img: 'Цезарь.png',
          desc: 'Description about meal',
          category: 'drinks',
          price: '220'
        },
        {
          id: 3,
          title: 'Стейк',
          img: 'Цезарь.png',
          desc: 'Description about meal',
          category: 'meat',
          price: '560'
        },
        {
          id: 4,
          title: 'Борщ',
          img: 'Цезарь.png',
          desc: 'Description about meal',
          category: 'soup',
          price: '450'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.deleteOrder = this.deleteOrder.bind(this)
    
  }


  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        
        <div style={{ padding: '20px' }}>
          <h1>Личный кабинет</h1>
          <UserProfile />
          <OrderHistory />
          
        </div>

        <Footer />
      </div>
    )
  }


  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

}

export default Lk