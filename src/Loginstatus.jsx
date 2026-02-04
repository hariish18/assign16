import React from 'react'

const Loginstatus = ({isLoggedIn}) => {
  return (
    <div>
      {isLoggedIn? <p>Welcome Back</p>: <p>Please login!!</p> }
    </div>
  )
}

export default Loginstatus
