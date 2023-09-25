import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);


    const handleClick = (e) => {
       e.preventDefault();
       setUser({username,password});
       setUsername('');
       setPassword('');
    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }}
                placeholder="username" />
            <input type="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}
                placeholder="password" />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Login
