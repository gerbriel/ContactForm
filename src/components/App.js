import { useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContext';
import './App.css';
import ContactProvider from '../providers/ContactProvider';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import LogInForm from './LogInForm';

const App = () => {
  const [user, setUser]=useState(null);
  const login=(username, password)=>{
    if (username=='gerbriel' && password =='secret'){
      setUser(username)
    }
  }
  const logout = ()=> {
    setUser(null)
  }

  return (
    <div>
      <AuthContext.Provider value={{user,login, logout}}>
      {!user 
        ?<LogInForm/>
        :<ContactProvider>
          <ContactList />
          <ContactForm />
        </ContactProvider>
      }
      </AuthContext.Provider>
    </div>
  );
}

export default App;