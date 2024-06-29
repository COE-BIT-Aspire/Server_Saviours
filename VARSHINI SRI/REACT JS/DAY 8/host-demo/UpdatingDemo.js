import React, { Component } from 'react'

export class UpdatingDemo extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name : "Varshini"}}
    ChangeName(event){
        this.setState({
            name : "Saras"})}
  render() {
    return (
      <div>UpdatingDemo
        <h2 style = {{color:"blue"}}>Welcome {this.state.name}</h2>
        <button onClick = {(event)=>this.ChangeName(event)}>Update Name</button>
      </div>)}
  getSnapshotBeforeUpdate(preProps, preState){
    console.log("Snapshot before update",preState.name);
    return null;}
  componentDidMount(){
    console.log("Component is updated in the DOM");}
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.name === this.state.name){
      return false;}
    return true;}}
    
export default UpdatingDemo