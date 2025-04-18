
import './App.css'

function App() {

  const handleFetch = async() => {
    const response = await fetch("http://localhost:8000/api/coucou")
    console.log(response)
    const data = await response.json()

    console.log(data)
  }

  return (
    <>
    <button onClick={handleFetch}>Fetch</button>
    </>
  )
}

export default App
