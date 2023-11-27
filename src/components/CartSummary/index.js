// Write your code here
import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="cartSummaryContainer">
            <h1 className="orderTotalValue">
              <span className="orderTotalLabel">Order Total : </span>Rs {total}{' '}
              /-
            </h1>
            <p className="totalItems">{cartList.length} Items in cart</p>
            <button type="button" className="checkoutButton d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkoutButton d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
