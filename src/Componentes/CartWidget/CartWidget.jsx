import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "../src/assets/carrito.png";
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
      <p>8</p>
    </div>
  )
}

export default CartWidget
