import React from "react";

function Hello(props){
    return(
        <div>Hello Varshini! Welcome To React
            <h1>Hi This is a user named {props.username} and your password is {props.password}</h1>
        </div>
    )
}

export default Hello;