
import React from 'react'

const ProductData = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 hover:shadow-xl transition mt-2 ml-1.5">

      {/* Product Image */}
      <div className="bg-gray-50 rounded-lg p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold text-[#131921] mt-4 line-clamp-2">
        {product.title}
      </h2>

      {/* Price */}
      <div className="mt-3">
        <span className="text-2xl font-bold text-[#B12704]">
          ${product.price}
        </span>
      </div>

      {/* Quantity UI */}
      <div className="flex items-center gap-3 mt-4">
        <span className="font-medium text-gray-700">Quantity:</span>
        <span className="px-4 py-1 border border-gray-300 rounded-lg">
          1
        </span>
      </div>

      {/* Add to Cart */}
      <button className="w-full mt-5 bg-[#FFD814] hover:bg-[#F7CA00] text-[#131921] font-semibold py-3 rounded-full transition">
        Add to Cart
      </button>

    </div>
  )
}

export default ProductData
