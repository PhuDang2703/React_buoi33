import React, { Component } from 'react'
import ShoesItem from './shoesItem'
import data from './data.json'

export default class Shoes extends Component {
constructor(props){
super(props);

this.state = {
    listShoes: data,
    detail: data[0],
}
}

renderShoes = () => {
const {listShoes} = this.state;
   return listShoes.map((item)=>{
    return <ShoesItem key={item.id} shoes={item} getDetail={this.handleDetail}/>
    })
}

handleDetail = (infoShoes) => {
    // console.log(123)
    this.setState({
        detail: infoShoes,
    })
}

  render() {
    const {detail} = this.state;
    return (
      <div>
        <h2 className='text-center'>Shop Shoes</h2>
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                <h3>Detail shoes</h3>
                <table className='table'>
                    <tr>
                        <td>Name</td>
                        <td>{detail.name}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>{detail.price}$</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{detail.description}</td>
                    </tr>
                </table>
                </div>
                <div className='col-8'>
                    <div className='row'>{this.renderShoes()}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
