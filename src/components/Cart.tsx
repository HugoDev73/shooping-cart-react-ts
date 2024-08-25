import { useState } from "react";
import { Guitar } from "../interfaces/Guitar";
interface CartProps {
  cart: Guitar[];
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
}

const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal,
}: CartProps) => {
  const [open, setOpen] = useState(false);

  const openDropdown = () => setOpen(open ? false : true);
  return (
    <>
      <div className="w-full bg-blue-200 flex justify-center p-2">
      <div className="dropdown relative inline-flex">
        <button
          type="button"
          onClick={openDropdown}
          data-target="dropdown-default"
          className="dropdown-toggle inline-flex justify-center items-center gap-2 py-3 px-6 text-sm bg-indigo-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-indigo-700 "
        >
          Carrito
        </button>
        <div className="flex items-center ms-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
        { cart.length }</span></div>
        <div
          id="dropdown-default"
          className={`dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-72 mt-2 ${
            open ? "open" : "hidden"
          }`}
          aria-labelledby="dropdown-default"
        >
          <div className="card">
            {isEmpty ? (
              <div className="p-2 border-spacing-1 rounded bg-blue-200">
                El carrito está vacio
              </div>
            ) : (
              <div className="relative overflow-x-auto shadow-md">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Nombre
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Cantidad
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Precio
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((guitar: Guitar) => (
                      <tr
                        key={guitar.id}
                        className="bg-white border-b "
                      >
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          {guitar.name}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => decreaseQuantity(guitar.id)}
                              className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <div>
                              <span className="text-center bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 ">
                                {guitar.quantity}
                              </span>
                            </div>
                            <button
                              onClick={() => increaseQuantity(guitar.id)}
                              className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900">
                          $ {guitar.price}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => removeFromCart(guitar.id)}
                            className="font-medium text-red-600 hover:underline"
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-center p-2 bg-blue-300">
                  Total pagar: <span className="font-bold">$ {cartTotal} </span>
                </p>
                <button
                  onClick={clearCart}
                  className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 w-full"
                >
                  Limpiar carrito
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
     
    </>
  );
};

export default Cart;
