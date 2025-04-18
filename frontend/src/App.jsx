
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import { useState } from 'react';

function App() {

  const [joke, setJoke] = useState(false)

  const handleFetch = async() => {
    const response = await fetch("http://localhost:8000/api/coucou")
    const data = await response.json()
    if(!joke){
      toast.error("Attention, ton ordinateur surchauffe !")
      setJoke(true)
      setTimeout(() => {
        toast.success(`C'était une blague ! 🙂 ${data}`)
      }, 2000);
    }else{
      toast.success(data)
    }
  }

  return (
    <>
      <button onClick={handleFetch}>Fetch</button>
      <ToastContainer
      theme="dark"
       />
    </>
  )
}

export default App
