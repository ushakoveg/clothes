import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './style/App.scss'



function App() {
  const [items, setItems] = useState([]);


  return (
    
    <div className="container">
     <button path></button>

     <Header/>
     <Main/>
     <Footer/>
     </div>
  )
}


export default App
