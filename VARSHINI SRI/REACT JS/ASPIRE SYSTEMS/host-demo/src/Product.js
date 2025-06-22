import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Product extends Component {
  render() {
    return (
      <div>
        <h1 style = {{color:'red'}}>Product Page</h1>
        <li><Link to = '/product/laptop'>View All The Laptop Brands</Link></li>
        <ol>
            <li>Laptop Brands</li>
        </ol>
      </div>
    )
  }
}

export default Product