import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const dummyCart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

function Checkout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  function handleCreateCheckout(evt) {
    evt.preventDefault();
    // Simulate creating a checkout with a backend API
    setCheckoutId(1234);
    //navigate(`/order-confirmation/${checkoutId}`);
  }

  function handlePaymentSuccess(details) {
    console.log("Payment Successful! Details: ", details);
    navigate("/order-confirmation");
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700" />
            <input
              type="email"
              value="dummy_email@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.firstName}
                onChange={(evt) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: evt.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.lastName}
                onChange={(evt) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: evt.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              className="w-full p-2 border rounded"
              required
              type="text"
              value={shippingAddress.address}
              onChange={(evt) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: evt.target.value,
                })
              }
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.city}
                onChange={(evt) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: evt.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={shippingAddress.postalCode}
                onChange={(evt) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: evt.target.value,
                  })
                }
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              className="w-full p-2 border rounded"
              required
              type="text"
              value={shippingAddress.country}
              onChange={(evt) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: evt.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              className="w-full p-2 border rounded"
              required
              type="text"
              value={shippingAddress.phone}
              onChange={(evt) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: evt.target.value,
                })
              }
            />
          </div>
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white cursor-pointer py-3 rounded hover:bg-gray-800">
                Continue To Payment
              </button>
            ) : (
              <div className="">
                <h3 className="text-lg mb-4">Pay With Paypal</h3>
                {/* Paypal Button Component 💳💰*/}
                <PaypalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment failed. Try again...", err)}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* Right Side */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {dummyCart.products.map((product, idx) => (
            <div
              key={idx}
              className="flex items-start justify-between py-2 border-b">
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                  <p className="text-xl">${product.price?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>SubTotal</p>
          <p>${dummyCart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${dummyCart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
