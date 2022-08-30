import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import { MenuList } from './helpers/MenuList';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([])

  const handleAddItem = (menuItem) => {
    const exist = cartItems.find((item) => item.id === menuItem.id)
    if (exist) {
      setCartItems(cartItems.map((item) =>
        item.id === menuItem.id ? { ...exist, qty: exist.qty + 1 } : item))
    } else {
      setCartItems([...cartItems, { ...menuItem, qty: 1 }])
    }
  }

  const handleRemoveItem = (menuItem) => {
    const exist = cartItems.find((item) => item.id === menuItem.id)
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== menuItem.id))
    } else {
      setCartItems(cartItems.map((item) =>
        item.id === menuItem.id ? { ...exist, qty: exist.qty - 1 } : item))
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu MenuList={MenuList} handleAddItem={handleAddItem} />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
