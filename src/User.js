import React from 'react'
import App from './App';

function App() {
    function get() {
        alert("Hello from user")
    }
    return (
        <div className='App'>
            <App data={get} />
        </div>
    )
}


export default User;