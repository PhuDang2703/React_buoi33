import React, { Component } from 'react'

export default class ShoesItem extends Component {

    handleDetail = () => {
        this.props.getDetail(this.props.shoes)
    }

    render() {
        const {shoes, getDetail} = this.props;
        return (
                <div className='col-md-4 mt-3'>
                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src={shoes.image} alt="Card image" />
                        <div className="card-body">
                            <h4 className="card-title">{shoes.name}</h4>
                            <p className="card-text">{shoes.price}$</p>
                            <button onClick={this.handleDetail} className='btn btn-info'>Show Detail</button>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}