import React from 'react'

function LogoutButton() {

    const handleLogout = () =>{
        window.location.href = 'http://localhost:3000/auth/logout'
    }
  return (
    <div className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={handleLogout}>
      Logout
    </div>
  )
}

export default LogoutButton
