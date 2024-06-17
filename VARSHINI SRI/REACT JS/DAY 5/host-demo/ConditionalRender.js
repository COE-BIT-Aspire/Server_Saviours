import React, { Component } from 'react'

export class ConditionalRender extends Component {
  render() {
    let value = 1
    let layout = null
    if(value==0){
        layout = <div style = {{'color':'red', 'background':'yellow'}}>
            <h1>This a layout 1</h1>
        </div>
    }
    else{
        layout = <div style = {{'color':'blue', 'background':'green'}}>
            <h1>This a layout 2</h1>
        </div>
    }
    return layout
  }
}

export default ConditionalRender;