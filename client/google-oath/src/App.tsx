import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Profile from './components/Profile'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() =>{
    axios.get('http://localhost:3000/api/user', {
      withCredentials: true
    })
    .then((response) =>{
      setUser(response.data)
    })
  }, [])
  return (
    <div className ='container mx-auto mt-8'>
      {user ? (
        <Profile user={user}/>
      ):(
        <LoginButton/>
      )}
      
    </div>
  )
}

export default App
