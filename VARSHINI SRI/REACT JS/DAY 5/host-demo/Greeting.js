import React from 'react'
import ReactDOM from 'react-dom/client'
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />
    }
    else {
        return <GuestGreeting />
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting isLoggedIn={false} />)
