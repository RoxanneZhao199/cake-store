import React from 'react'
import {Link} from 'react-router-dom'
import BannerImage from '../assets/bannerImage.jpg'
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Meng's Cupcake</h1>
        <p>CUPCAKE TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
