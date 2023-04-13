import './shopping.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/reducers/storeReducers'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/actions/cartSlice'

export const Shopping = () => {
  const carts = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const handleRemoveFromCart = (cartItem: any) => {
    console.log(cartItem)
    dispatch(removeFromCart(cartItem))
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {carts.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantiy</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {carts.cartItems?.map((cartItem) => (
              <div key={cartItem.name}>
                {cartItem.variants.map((variant) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={variant.image} alt="product_image" />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.description}</p>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">${variant.price}</div>
                    <div className="cart-product-quantity">
                      <button>-</button>
                      <div className="count"> {carts.cartQuantity}</div>
                      <button>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      ${variant.price * carts.cartQuantity}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${carts.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
