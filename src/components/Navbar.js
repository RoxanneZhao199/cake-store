import React, { useState } from 'react';
import Logo from '../assets/cupcake.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar(props) {
  const { cartItems } = props
  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = ()=> {
    setOpenLinks(!openLinks)
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <p className="logoText">Meng</p>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/signup"> Signup </Link>
          <Link to="/cart">
            <ShoppingCartIcon className="cartIcon" />
            <span className="cartLength">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/signup" className="signUp"> Signup </Link>
        <Link to="/cart" >
          <div className="cartNum">
            <ShoppingCartIcon className="cartIcon"/>
            <span className="cartLength">
              {cartItems.length === 0 ? "" : cartItems.length}
            </span>
          </div>
          </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
