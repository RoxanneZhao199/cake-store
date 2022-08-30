import React from 'react'

function MenuItem(props) {
  const { menuItem, handleAddItem } = props
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${menuItem.image})` }}></div>
      <h1> {menuItem.name} </h1>
      <p> ${menuItem.price} </p>
      <button onClick={() => handleAddItem(menuItem)}>Add To Cart</button>
    </div>
  )
}

export default MenuItem
