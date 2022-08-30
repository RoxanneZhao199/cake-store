import React from 'react'
import '../styles/Cart.css'

function Cart(props) {
  const { cartItems, handleAddItem, handleRemoveItem } = props
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
  const deliveryPrice = itemsPrice > 100 ? 0 : 9.99
  const totalPrice = itemsPrice + deliveryPrice
  return (
    <div className="cart">
      <div className="cartItems-header">Cart Items</div>
      <div>
        {cartItems.length === 0 && (
          <div className="cartItems-empty"> 🧁 No Cupcakes are added.</div>
        )}
      </div>

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cartItems-list">
            <img
              className="cartItems-image"
              src={item.image}
              alt={item.name}
             />
            <div className="cartItems-name">{item.name}</div>
            <div className="cartItems-function">
              <button onClick={() => handleAddItem(item)} className="cartItems-add">
                +
              </button>
              <button onClick={() => handleRemoveItem(item)} className="cartItems-remove">
                -
              </button>
            </div>
            <div>{item.qty} x ${item.price.toFixed(2)}</div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="itemPrice">
              <div className="itemPrice-name">Items Price</div>
              <div className="itemPrice-num">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="deliveryPrice">
              <div className="deliveryPrice-name">Delivery Price</div>
              <div className="deliveryPrice-num">${deliveryPrice}</div>
            </div>
            <div className="totalPrice">
              <div className="totalPrice-name"><strong>Total Price</strong></div>
              <div className="totalPrice-num"><strong>${totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr/>
            <div>
              <button className="checkout" onClick={() => alert('Implement Checkout')}>
                Checkout
              </button>
            </div>
          </>
          )}
      </div>
    </div>
  )
}

export default Cart
