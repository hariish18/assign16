import { useState } from 'react'
import List from './List'
import './App.css'
import UserInfo from './UserInfo'
import Loginstatus from './Loginstatus'

function Message() {
  return (
    <div className="card highlight">
      <h3>Welcome to React 🚀</h3>
    </div>
  );
}

function Title({ title }) {
  return <h3>{title}</h3>;
}

function Description({ description }) {
  return <p>{description}</p>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserInfo/>
      <List/>
      <Title title="Assignment16"/>
      <Description description={"Its fun working with react"}/>
      <Loginstatus isLoggedIn={true}/>
    </>
  )
}

export default App
