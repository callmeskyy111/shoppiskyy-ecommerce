import React, { useState } from "react";

function EditProduct() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleImageUpload(evt) {
    const file = evt.target.files[0];
    console.log(file);
    //const data = new FormData();
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log(productData);
    // Update the product in the backend using the productData
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>
        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Count In Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",")}
            onChange={(evt) =>
              setProductData({
                ...productData,
                sizes: evt.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",")}
            onChange={(evt) =>
              setProductData({
                ...productData,
                colors: evt.target.value
                  .split(",")
                  .map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            //className="w-full border border-gray-300 rounded-md p-2 cursor-pointer"
            onChange={handleImageUpload}
            required
          />
          <div className="flex mt-4">
            {productData.images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img.url}
                  alt={img.altText || "Product Image"}
                  className="h-20 w-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors" type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
