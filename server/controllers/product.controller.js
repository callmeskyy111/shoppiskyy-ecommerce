import productModel from "../models/product.model.js";

// @route POST /api/v1/products
// @desc Creates a new product
// @access Private/Admin
export async function createProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;
    const product = new productModel({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the Admin_User who created it.
    });
    const createdProduct = await product.save();
    res.status(201).json({
      success: true,
      message: "Product created successfully. ✅",
      product: createdProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message + " 🔴",
    });
  }
}

/// @route PUT /api/v1/products/:id
// @desc Updates a product by ID
// @access Private/Admin

export async function updateProduct(req, res) {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    // Validate product ID
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required 🔴",
      });
    }

    // Find and update the product
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      {
        name,
        description,
        price,
        discountPrice,
        countInStock,
        category,
        brand,
        sizes,
        colors,
        collections,
        material,
        gender,
        images,
        isFeatured,
        isPublished,
        tags,
        dimensions,
        weight,
        sku,
      },
      { new: true, runValidators: true } // Returns updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: `Product with ID: ${productId} not found 🔴`,
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully ✅",
      updatedProduct,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route DELETE /api/v1/products/delete/:id
// @desc Delete a product by ID
// @access Private/Admin

export async function deleteProduct(req, res) {
  try {
    // Validate and get product ID
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required 🔴",
      });
    }

    // Find and delete the product
    const deletedProduct = await productModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: `Product with ID: ${productId} not found 🔴`,
      });
    }

    res.json({
      success: true,
      message: `Product with ID: ${productId} deleted successfully ✅`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route GET /api/v1/products/
// @desc Get all products with optional query filters
// @access Public

export async function getAllProducts(req, res) {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    let query = {};

    // Filtering Logic
    if (collection && collection.toLowerCase() !== "all") {
      query.collections = collection;
    }
    if (category && category.toLowerCase() !== "all") {
      query.category = category;
    }
    if (material) {
      query.material = { $in: material.split(",") };
    }
    if (brand) {
      query.brand = { $in: brand.split(",") };
    }
    if (size) {
      query.sizes = { $in: size.split(",") };
    }
    if (color) {
      query.colors = { $in: [color] };
    }
    if (gender) {
      query.gender = gender;
    }
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }
      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { tags: { $regex: search, $options: "i" } },
      ];
    }

    // Sorting logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          sort = { createdAt: -1 };
          break;
      }
    }
    // Fetch products and apply sorting and limit
    let products = await productModel
      .find(query)
      .sort(sort)
      .limit(Number(limit) || 0);
    res.json({
      success: true,
      totalProducts: products.length,
      message: "Products fetched successfully. ✅",
      products,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route GET /api/v1/products/:id
// @param GET a single product by ID
// @access Public

export async function getProductById(req, res) {
  try {
    const productId = req.params.id;
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID: ${productId} not found 🔴`,
      });
    }
    res.json({
      success: true,
      message: "Product fetched successfully. ✅",
      fetchedProduct: product,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route GET /api/v1/products/similar/:id
// @desc Retrieve similar/related product based on the current product's gender and category
// @access Public

export async function getSimilarProducts(req, res) {
  const productId = req.params.id;
  try {
    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with ID: ${productId} not found 🔴`,
      });
    }

    const similarProducts = await productModel
      .find({
        _id: { $ne: productId }, // Exclude the current product ID
        gender: product.gender,
        category: product.category,
      })
      .limit(4);

    res.json({
      success: true,
      message: "Similar products fetched successfully. ✅",
      similarProducts,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route GET /api/products/best-seller
// @desc Retrieve the product with the highest rating
// @access Public

export async function getBestSeller(req, res) {
  try {
    const bestSeller = await productModel
      .findOne()
      .sort({ rating: -1 })
      .limit(1);
    if (!bestSeller) {
      return res.status(404).json({
        success: false,
        message: "No best-seller found 🔴",
      });
    }

    res.json({
      success: true,
      message: "Best seller product fetched successfully. ✅",
      bestSeller,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

// @route GET /api/products/new-arrivals
// @desc Retrieve 8 products based on - Creation Date
// @access Public

export async function getNewArrivals(req, res) {
  try {
    // Fetch latest 8 products from the DB
    const newArrivals = await productModel
      .find()
      .sort({ createdAt: -1 }) //-1 or DESC so that the latest products are displayed first.
      .limit(8);
    if (!newArrivals) {
      return res.status(404).json({
        success: false,
        message: "No new arrivals found!",
      });
    }

    res.json({
      success: true,
      message: "New arrivals products fetched successfully. ✅",
      newArrivals: newArrivals,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
