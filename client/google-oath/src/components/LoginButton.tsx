import React from 'react'

function LoginButton() {

    const handleLogin = ()=>{
        window.location.href = "http://localhost:3000/auth/google"
    }
  return (
    <div className='flex justify-center items-center h-screen'>
     <button onClick={handleLogin} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Login with Google
     </button>
    </div>
  )
}

export default LoginButton
