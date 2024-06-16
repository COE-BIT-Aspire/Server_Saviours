import React, { Component } from 'react'

export default class Wishing extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username : "Varshini", // Class Variable
         Address : "Bangalore"
      }
    }
    ChangeName(event){
        this.setState({
            username : event.target.value
        })
    }
  render() {
    return (
      <div>Wishing
        <h1>Hi {this.state.username} Welcome to {this.state.Address}</h1>
        Enter your username : <input type = "text" name = "username" value = {this.state.username}
        onChange={(event)=>this.ChangeName(event)}/>
      </div>
    )
  }
}
