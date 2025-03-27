import React, { Component } from 'react'

export class Laptop extends Component {
  render() {
    return (
      <div>
        <h1 style = {{color:'blue'}}>List Of All Laptop Brands</h1>
        <ol>
            <li>Intel</li>
            <li>Acer</li>
            <li>Sony</li>
            <li>Dell</li>
            <li>Toshiba</li>
        </ol>
      </div>
    )
  }
}

export default Laptop