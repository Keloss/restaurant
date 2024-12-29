import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Items from "../components/Items";
import Category from "../components/Category";
import ShowFullItem from "../components/ShowFullItem";


class Main extends React.Component {
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
          category: 'italian',
          price: '380',
          count: '0'
        },
        {
          id: 2,
          title: 'Хачапури по аджарски',
          img: 'Хачапури.png',
          desc: 'Description about meal',
          category: 'georgia',
          price: '220',
          count: '0'
        },
        {
          id: 3,
          title: 'Стейк',
          img: 'Стейк.png',
          desc: 'Description about meal',
          category: 'franch',
          price: '580',
          count: '0'
        },
        {
          id: 4,
          title: 'Борщ',
          img: 'Борщ.png',
          desc: 'Description about meal',
          category: 'russian',
          price: '450',
          count: '0'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.delFromOrder = this.delFromOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onAdd={this.addToOrder} delCount={this.delFromOrder}/>
        
        <div className='menu'>Мeню</div>
        <Category chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }  


  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }


  chooseCategory(category) { 
  if (category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

 
  addToOrder(item) {
    this.setState(prevState => {
      // Проверяем, есть ли уже этот товар в корзине
      const existingOrder = prevState.orders.find(el => el.id === item.id);
  
      if (existingOrder) {
        // Если товар уже есть, увеличиваем его счетчик
        return {
          orders: prevState.orders.map(el =>
            el.id === item.id ? { ...el, count: el.count + 1 } : el
          )
        };
      } else {
        // Если товара нет в корзине, добавляем его с начальным счетчиком 1
        return {
          orders: [...prevState.orders, { ...item, count: 1 }]
        };
      }
    });
  }

  delFromOrder(item) {
    this.setState(prevState => {
      // Находим существующий товар в заказах
      const existingOrder = prevState.orders.find(el => el.id === item.id);
  
      if (existingOrder) {
        // Если товар есть и его счетчик больше 1, уменьшаем счетчик
        if (existingOrder.count > 1) {
          return {
            orders: prevState.orders.map(el =>
              el.id === item.id ? { ...el, count: el.count - 1 } : el
            )
          };
        } else {
          // Если счетчик равен 1, удаляем товар из корзины
          return {
            orders: prevState.orders.filter(el => el.id !== item.id)
          };
        }
      }
  
      // Если товара нет в корзине, ничего не меняем
      return prevState;
    });
  }

  
}

export default Main;
