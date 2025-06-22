import HOC from './ModifiedComponent'
import React, { Component } from 'react'

export class WishLabel extends Component {
    render() {
        return (
          <div>
            <br/>
            Counter: {this.props.count}
            <label onMouseOver={this.props.incrementCounter}>Move Here</label>
          </div>
        )
      }
    }

export default HOC(WishLabel)