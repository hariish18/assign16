import React from 'react'

const UserInfo = () => {
    const  name="harish";
    const age=22;

  return (
    <div>
      <h2>Hello {name}</h2>
      <p>you are {age} years old</p>
      {age>=18 ?  <p>you are an adult</p>: <p>you are underage kiddo</p> }
    </div>
  )
}

export default UserInfo
