import { useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './style/App.scss'
import Card from './Components/Card/Card'
import RegistrationForm from './Components/Regisration/Registration'



function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (item) => {
    setItems(items.filter((i) => i.id !== item.id));
  }
 
  return (
    
    <div className="container">
      <RegistrationForm/>
      <div>
      <h1>Shopping Cart</h1>
      <Card items={items} onRemove={removeItem} />
      <button onClick={() => addItem({ id: Date.now(), name: 'Item', price: 10 })}>
        Add Item
      </button>
    </div>

     <Header/>
     <Main/>
     <Footer/>
     </div>
  )
}


export default App
