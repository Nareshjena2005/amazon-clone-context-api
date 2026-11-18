import React from 'react'
import { useSelector } from 'react-redux';
const Homepage = () => {
    let {user}=useSelector((store)=>store.auth);
  return (
    <div className="min-h-screen bg-[#EAEDED]">

      {/* Welcome Section */}
      <section className="px-6 py-16 text-center bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-[#131921] mb-5">
          Welcome {user.name} to amazon<span className="text-orange-400">.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          Discover a world of amazing products at great prices.
          From electronics and fashion to home essentials and
          everyday needs, find everything you love in one place.
          Enjoy a smooth, convenient and reliable shopping experience.
        </p>

        <button className="mt-8 bg-[#FFD814] hover:bg-[#F7CA00] px-8 py-3 rounded-full font-semibold text-[#131921] transition">
          Start Shopping
        </button>
      </section>

      {/* Shopping Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-[#131921] text-center mb-10">
          Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3">Wide Selection</h3>
            <p className="text-gray-600">
              Explore a variety of products across different categories.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3">Great Prices</h3>
            <p className="text-gray-600">
              Find products that match your needs and budget.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <h3 className="text-xl font-bold mb-3">Easy Shopping</h3>
            <p className="text-gray-600">
              Enjoy a simple and convenient online shopping experience.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Homepage
