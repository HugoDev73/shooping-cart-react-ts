import CardItem from "./components/CardItem";
import Cart from "./components/Cart";
import { useCart } from "./hooks/useCart";

function App() {
  const {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  } = useCart();

  return (
    <>
      <div className="">
        <div className="">
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            clearCart={clearCart}
            isEmpty={isEmpty}
            cartTotal={cartTotal}
          />
        </div>
        <div>
          <h1 className="mb-4 mt-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Nuestra colección
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {data.map((guitar) => (
              <CardItem key={guitar.id} guitar={guitar} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
