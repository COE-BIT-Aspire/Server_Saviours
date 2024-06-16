import React, { Component } from 'react'

export default class AddToCart extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         cart:0
      }
    }
    incrementCounter(event){
        this.setState({
            cart:this.state.cart + 1
        })
    }
  render() {
    return (
      <div>
        <h1 style = {{color:"blue"}}>AddToCart</h1>
        <button onClick={(event)=>this.incrementCounter(event)}> Cart:{this.state.cart}
        </button>
      </div>
    )
  }
}
