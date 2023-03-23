import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name='NewYork' special='Foods'></District>
      <District name='Bangladesh' special='Clothes'></District>
      <District name='Canada' special='HealthCare'></District>
    </div>
  )
}

function LoadPosts(){

  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])


  return(
  <div>
    <h1>Posts: {posts.length}</h1>

    {
      posts.map(post => <Post title={post.title} body={post.body}></Post>)
    }
  </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor: 'lightgray', margin: '20px', border: '4px solid salmon'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return(
    <div className='district'>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the Power</button>
    </div>
  )
}

export default App
