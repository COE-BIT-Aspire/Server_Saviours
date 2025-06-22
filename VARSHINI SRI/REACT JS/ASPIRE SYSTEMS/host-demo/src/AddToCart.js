import HOC from './ModifiedComponent'
import React, { Component } from 'react'

export class AddToCart extends Component {
  render() {
    return (
      <div>
        <h1 style = {{color:"blue"}}>AddToCart</h1>
        <button onClick={this.props.incrementCounter}> Counter: {this.props.count}
        </button>
      </div>
    )
  }
}

export default HOC(AddToCart)
