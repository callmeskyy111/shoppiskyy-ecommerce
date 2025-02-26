import React from "react";

const selectedDummyProducts = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  brand: "FashionBrand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket View 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket View 2",
    },
  ],
};

function ProductDetails() {
  return (
    <div clasName="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedDummyProducts.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectedDummyProducts.images[0]?.url}
                alt="Main-Product-Image"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedDummyProducts.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedDummyProducts.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedDummyProducts?.originalPrice &&
                `${selectedDummyProducts.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedDummyProducts.price}
            </p>
            <p className="text-gray-600 mb-4">
              {selectedDummyProducts.description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedDummyProducts.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border cursor-pointer"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedDummyProducts.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 rounded border cursor-pointer">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">
                  -
                </button>
                <span className="text-lg">1</span>
                <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer">
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-800 cursor-pointer">
              ADD TO CART
            </button>
            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand:</td>
                    <td className="py-1">{selectedDummyProducts.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material:</td>
                    <td className="py-1">{selectedDummyProducts.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
