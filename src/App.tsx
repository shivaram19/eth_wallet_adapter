import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [posts, setPosts] = useState([])
	async function getPosts(){
	const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
	const data = await response.json()
	setPosts(data)
}
	useEffect(() => {
	getPosts()
},[])



  return (
	{JSON.stringify(posts)}
	
 )
}

export default App
