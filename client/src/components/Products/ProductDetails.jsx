import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

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

const similarProducts = [
  {
    _id: 1,
    name: "Printed T-Shirt",
    price: 80,
    images: [{ url: "https://picsum.photos/500/500?random=2" }],
  },
  {
    _id: 2,
    name: "Classic Blue Jeans",
    price: 80,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 3,
    name: "Leather Jacket",
    price: 120,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 4,
    name: "Stylish Pants",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
];

function ProductDetails() {
  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleQtyChange(action) {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  async function handleAddToCart() {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart! 🔴", {
        duration: 1400,
      });
      return;
    }
    setIsButtonDisabled(true);
  }

  useEffect(() => {
    if (selectedDummyProducts?.images?.length > 0) {
      setMainImage(selectedDummyProducts.images[0].url);
    }
  }, [selectedDummyProducts]);
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedDummyProducts.images.map((image, idx) => (
              <img
                key={idx}
                src={image.url}
                alt={image.altText || `Thumbnail ${idx}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
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
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
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
              {/* COLORS */}
              <p className="text-gray-700">Color:</p>

              <div className="flex gap-2 mt-2">
                {selectedDummyProducts.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-4 border-black "
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              {/* SIZES */}
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedDummyProducts.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded border cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                  onClick={() => handleQtyChange("minus")}>
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                  onClick={() => handleQtyChange("plus")}>
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 hover:bg-gray-800 cursor-pointer ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-700"
              }`}>
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
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
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium">
            You May Also Like
            <ProductGrid products={similarProducts} />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
