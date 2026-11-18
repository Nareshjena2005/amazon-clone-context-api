
import React from 'react'
import { Search } from 'lucide-react'
import Shoppage from '../pages/Shoppage'

const Filters = ({filterdata}) => {
  return (
    <div className="flex flex-1 max-w-3xl h-11 bg-white rounded-md overflow-hidden">

      <input
      onChange={(e)=>filterdata(e.target.value)}
        type="text"
        placeholder="Search products..."
        className="flex-1 min-w-0 px-4 text-black outline-none"
      />

      <button className="bg-[#FEBD69] hover:bg-[#F3A847] px-4 text-black">
        <Search size={22} />
      </button>

      <div className="flex items-center bg-gray-100 border-l px-3">
        <select className="bg-transparent text-gray-800 outline-none cursor-pointer text-sm">
          <option value="all">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
          <option value="fragrances">Fragrances</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="mens-shirts">Men's Shirts</option>
          <option value="womens-dresses">Women's Dresses</option>
          <option value="home-decoration">Home Decoration</option>
        </select>
      </div>

    </div>
  )
}

export default Filters
