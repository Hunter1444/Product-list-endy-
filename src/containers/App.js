import React from 'react';
import Product from '../components/product';
import StatusBar from '../components/statusBar';

const example = [
{
  name:'Пицца пепперони на тонком тесте',
  content:'Пепперони, моцарелла, томат'
},
{
  name:'2Пицца пепперони на тонком тесте',
  content:'Пепперони, моцарелла, томат'
},
{
  name:'3Пицца пепперони на тонком тесте',
  content:'Пепперони, моцарелла, томат'
}
]

export default class Profile extends React.Component{
  render(){
    const products = example.map(function(item, index){
      return <Product key={index} name={item.name} content={item.content}/>
    })
    return(
      <div>
        <ul className="products">
          {products}
        </ul>
        <StatusBar data-progress="0"/>
        <StatusBar data-progress="70"/>
        <StatusBar data-progress="100"/>
      </div>
    )
  }
}
