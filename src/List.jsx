import React from 'react'

const List = () => {
    const fruits=["Apple","banana","citrus"];
  return (
    <ul>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </ul>
  )
}

export default List
