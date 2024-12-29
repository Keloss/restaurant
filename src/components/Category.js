import React, { Component } from 'react'

export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'russian',
                    name: 'Русская кухня'
                },
                {
                    key: 'franch',
                    name: 'Французская кухня'
                },
                {
                    key: 'italian',
                    name: 'Итальянская кухня'
                },
                {
                    key: 'georgia',
                    name: 'Грузинская кухня'
                },
            ]
        }
    }
  render() {
    return (
      <div className='category'>
        {this.state.category.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category