import React, { Component } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";


export class About extends Component {
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
        <div class="restaurant-description">
            <h1>Ресторан "АВА"</h1>
            <p>Добро пожаловать в наш ресторан, где вы сможете насладиться разнообразием кухонь со всего мира!</p>

            <h2>Итальянская кухня</h2>
            <p>Насладитесь классическими итальянскими блюдами, такими как пицца, паста и ризотто. Мы используем только свежие ингредиенты и традиционные рецепты, чтобы передать аутентичный вкус Италии.</p>

            <h2>Японская кухня</h2>
            <p>Откройте для себя мир суши, сашими и других японских деликатесов. Наши повара готовят блюда с использованием свежих морепродуктов и настоящих японских ингредиентов.</p>

            <h2>Мексиканская кухня</h2>
            <p>Погрузитесь в яркие и острые вкусы Мексики с нашими тако, энчиладами и гуакамоле. Мы предлагаем как традиционные, так и современные блюда, которые обязательно порадуют ваши вкусовые рецепторы.</p>

            <h2>Французская кухня</h2>
            <p>Попробуйте изысканные французские блюда, такие как крок-месье, рататуй и крем-брюле. Наша команда поваров создает настоящие кулинарные шедевры, которые подарят вам незабываемые впечатления.</p>

            <h2>Китайская кухня</h2>
            <p>Погрузитесь в разнообразие китайских блюд, от дим-самов до жареного риса. Мы предлагаем как классические, так и современные интерпретации китайской кухни, чтобы удовлетворить любой вкус.</p>

            <h2>Вегетарианская кухня</h2>
            <p>Для наших вегетарианских гостей мы предлагаем широкий выбор блюд, приготовленных из свежих овощей, злаков и бобовых. Каждое блюдо наполнено вкусом и пользой для здоровья.</p>

            <p>Мы ждем вас в нашем ресторане, чтобы поделиться с вами лучшими блюдами со всего мира!</p>
        </div>

        
        <Footer />
      </div>
    )
  }


  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

}

export default About