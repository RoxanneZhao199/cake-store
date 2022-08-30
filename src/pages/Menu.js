import React from 'react';
// import { MenuList} from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu(props) {
  const { MenuList, handleAddItem } = props
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            menuItem={menuItem}
            handleAddItem={handleAddItem}
          >
          </MenuItem>
        ))}
      </div>
    </div>
  )
}

export default Menu
