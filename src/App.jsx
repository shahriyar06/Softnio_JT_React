import { useState } from 'react';
import './App.css';
import black from "./../public/black.jpeg";
import blue from "./../public/blue.jpeg";
import Green from "./../public/Green.jpeg";
import Purple from "./../public/Purple.jpeg";
import { FaRegHeart, FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

function App() {
  const [mainImage, setMainImage] = useState(Purple);
  const [currentPrice, setCurrentPrice] = useState(79);
  const [currentColor, setCurrentColor] = useState("#6576FF");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");

  const handleColorChange = (color, image) => {
    setCurrentColor(color);
    setMainImage(image);
  };

  const handleSizeChange = (size, price) => {
    setCurrentPrice(price);
    setSelectedSize(size);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const addToCart = () => {
    const newItem = {
      name: "Classy Modern Smart Watch",
      color: currentColor,
      size: selectedSize,
      quantity,
      price: currentPrice,
      image: mainImage,
    };

    setCart([...cart, newItem]);
    setQuantity(1); // Reset quantity
  };

  const clearCart = () => {
    setCart([]);
    setIsModalOpen(false);
  };

  const getColorName = (color) => {
    switch (color) {
      case "#6576FF":
        return "Purple";
      case "#1FCEC9":
        return "Green";
      case "#4B97D3":
        return "Blue";
      case "#3B4747":
        return "Black";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="mt-8">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-11 gap-8 overflow-hidden items-center">
          {/* Image Section */}
          <div className="col-span-5 px-3">
            <img
              src={mainImage}
              alt="Classy Modern Smart Watch"
              className="rounded max-w-full h-[550px]"
            />
          </div>
          {/* Details Section */}
          <div className="col-span-6 pr-12">
            <h1 className="text-2xl font-bold text-start">Classy Modern Smart Watch</h1>
            <div className="flex items-center text-[#FFD200]">
              <div className="">
                <div className='flex items-center text-[#FFD200]'>
                  <FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /><FaRegStar />
                </div>
              </div>
              <span className="text-sm text-[#8091A7] ml-2">(2 Reviews)</span>
            </div>
            <div className="flex items-end mt-3">
              <span className="line-through text-[#8091A7] mr-2 text-lg">$99.00</span>
              <span className="text-[#6576FF] font-semibold text-2xl" style={{ color: currentColor }}>${currentPrice}.00</span>
            </div>
            <p className="text-[#8091A7] mt-3 text-start">
              I must explain to you how all this mistaken idea of denouncing praising pain was born and I will give you a complete account of the system, and expound the actual teaching.
            </p>
            <div className="flex gap-10 items-center mt-3">
              <div className='text-start'>
                <h1 className="text-[#8091A7]">Type</h1>
                <h1 className="text-xl font-semibold">Watch</h1>
              </div>
              <div className='text-start'>
                <h1 className="text-[#8091A7]">Model Number</h1>
                <h1 className="text-xl font-semibold">Forerunner 290XT</h1>
              </div>
            </div>
            {/* Options */}
            <div className="mt-3">
              <label className="block text-gray-700 font-medium mb-2 text-start">Band Color:</label>
              <div className="flex space-x-3 mb-3">
                {[
                  { color: "#6576FF", image: Purple },
                  { color: "#1FCEC9", image: Green },
                  { color: "#4B97D3", image: blue },
                  { color: "#3B4747", image: black },
                ].map(({ color, image }, index) => (
                  <button
                    key={index}
                    className={`p-1 rounded-full flex items-center justify-center transition-all duration-200 ${currentColor === color ? "ring-2 ring-offset-2 ring-offset-white ring-[color]" : ""
                      }`}
                    style={{
                      boxShadow: currentColor === color ? `0 0 0 3px ${color}` : "none",
                    }}
                    onClick={() => handleColorChange(color, image)}
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{
                        backgroundColor: color,
                      }}
                    ></div>
                  </button>
                ))}
              </div>
              {/* Wrist Size */}
              <div className="mt-3">
                <label className="block text-gray-700 font-medium mb-2 text-start">Wrist Size:</label>
                <div className="flex space-x-4">
                  {[
                    { size: "S", price: 69 },
                    { size: "M", price: 79 },
                    { size: "L", price: 89 },
                    { size: "XL", price: 99 },
                  ].map(({ size, price }, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 border rounded-lg size-button ${selectedSize === size ? "border-[#6576FF]" : "border-gray-300"
                        }`}
                      onClick={() => handleSizeChange(size, price)}
                      data-size={size}
                    >
                      <span
                        className={`${selectedSize === size ? "text-[#6576FF]" : "text-black"
                          }`}
                      >
                        {size}
                      </span>{" "}
                      <span className="text-[#8091A7] text-sm">${price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Cart Actions */}
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center">
                <button
                  className="w-8 h-8 flex items-center justify-center text-xl font-bold text-[#8091A7] border border-gray-300 hover:bg-gray-200"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="w-10 h-8 text-center border-y text-xl font-medium text-[#000000]">
                  {quantity}
                </span>
                <button
                  className="w-8 h-8 flex items-center justify-center text-xl font-bold text-[#8091A7] border border-gray-300 hover:bg-gray-200"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
              <button
                className="bg-[#6576FF] text-white py-2 px-4 rounded-md hover:bg-[#6576F1]"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <FaRegHeart className='text-[#6576FF] text-2xl' />
            </div>
          </div>
        </div>
      </div>
      {cart.length > 0 && (
        <div
          className="mt-10 mx-auto w-36 text-center bg-[#FFBB5A] text-black py-2 px-6 rounded-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          Checkout ({cart.length})
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-3/5 rounded-lg shadow-lg">
            <div className="px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800 text-start">Your Cart</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-center text-[#8091A7]">
                <thead>
                  <tr>
                    <th className="py-2">Item</th>
                    <th className="py-2">Color</th>
                    <th className="py-2">Size</th>
                    <th className="py-2">Quantity</th>
                    <th className="py-2">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 flex items-center gap-3">
                        <img src={item.image} className="w-10 h-10 rounded" alt="" />
                        {item.name}
                      </td>
                      <td className="py-2">{getColorName(item.color)}</td>
                      <td className="py-2">{item.size}</td>
                      <td className="py-2">{item.quantity}</td>
                      <td className="py-2">${item.price * item.quantity}.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 flex justify-between text-lg font-medium">
                <span>Total</span>
                <div className='flex gap-20 mr-6'>
                  <div>
                    {cart.reduce((totalQty, item) => totalQty + item.quantity, 0)}
                  </div>
                  <div>
                    ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}.00
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t flex justify-end gap-5">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 font-medium rounded hover:bg-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                Continue Shopping
              </button>
              <button
                className="px-4 py-2 bg-[#6576FF] text-white font-medium rounded hover:bg-[#6576F1]"
                onClick={clearCart}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
