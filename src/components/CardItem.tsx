import { GuitarProps } from "../interfaces/Guitar";

const CardItem = ({ guitar, addToCart }: GuitarProps) => {
  return (
    <>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <div className="flex">
        <img
          className="w-16"
          src={`/img/${guitar.image}.jpg`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{guitar.name}</div>
          <p className="text-gray-700 text-base">{guitar.description}</p>
        </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={() => addToCart(guitar)}
            className="w-full bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-300"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default CardItem;
