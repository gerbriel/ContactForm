import React, { useState, useRef, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { useContacts } from '../hooks/index';

const LogInForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {login}=useContext(AuthContext);
    const handleSubmit = (event)=>{
        event.prventDefault();
        login(username, password)
    }
{

}
    return (
        <form className="Login" onSubmit={handleSubmit}>
            <div>
                <input 
                    type="text" 
                    placeholder="username"
                    value={username} 
                    onChange={e=>setUsername(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="password"
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit">login</button>
            </div>
        </form>
    )

}

export default LogInForm;
