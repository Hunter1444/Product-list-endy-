import React from 'react';

export default class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1,
      status:'active'
    }
  }

  changeStatus(status){
    this.setState({
      status
    })
  }

  countDecrement(){
    if(this.state.count > 1){
      this.setState({
        count: this.state.count - 1
      })
    }
  }

  countIncrement(){
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    const decrementDisabled = this.state.count > 1 ? '' : ' product-counter__decrement_disabled'
    const statusBtn = this.state.status === 'active' ?
    <button onClick={this.changeStatus.bind(this, 'removed')} className="product__status product__status_active">Удалить</button> :
    <button onClick={this.changeStatus.bind(this, 'active')} className="product__status product__status_removed">Вернуть</button>
    return(
      <li className="product">
        <img className="product__img"
        src="http://i4.pizza-jnp.ru/1/7744/77434292/afacdb/salyami-pepperoni.png" width="100px" height="50px"/>
      <span className="product__name">{this.props.name}</span>
        <span className="product__content">{this.props.content}</span>
        <div className="product-counter">
          <i onClick={this.countDecrement.bind(this)} className={"product-counter__decrement" + decrementDisabled}></i>
          <span className="product-counter__count">{this.state.count}</span>
          <i onClick={this.countIncrement.bind(this)} className="product-counter__increment"></i>
        </div>
        {statusBtn}
      </li>
    )
  }
}
