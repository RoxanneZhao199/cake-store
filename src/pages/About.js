import React from 'react'
import MakeCupcake from '../assets/makeCupcake.jpg'
import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MakeCupcake})`}}></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Perspiciatis minima nesciunt dolorem! </p>
      </div>
    </div>
  )
}

export default About
