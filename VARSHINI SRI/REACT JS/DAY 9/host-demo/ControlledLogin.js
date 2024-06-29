import React from 'react'

const ControlledLogin=()=> {
    const [form,setForm] = React.useState({
        email:'',
        password:'',});
    const handleChange=(event)=>{
        setForm({
            ...form,
            [event.target.id]:event.target.value,
        });};
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(form.email+' '+form.password);}
  return (
    <form onSubmit={handleSubmit}>
    <div>ControlledLogin
        <lable htmlFor = "email">Email</lable>
        <input id = "email" type = "text" value = {form.email} onChange={handleChange}></input>
    </div>
    <div>
        <lable htmlFor = "password">Password</lable>
        <input id = "password" type = "password" value = {form.password} onChange={handleChange}></input>   
    </div>
    <button type="submit">Submit</button>
    </form>
  );};
  
export {ControlledLogin}
