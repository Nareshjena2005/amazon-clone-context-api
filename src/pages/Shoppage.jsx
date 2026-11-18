
import React, { useEffect, useState } from 'react'
import ProductData from '../components/ProductData'
import ProductCartSkeleton from '../components/ProductCartSkeleton'
import { getProductData } from '../api/productapi'
import Filters from '../components/Fliters'

export const Shoppage = () => {
  const [productDataapi, setProductDataapi] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      let data = await getProductData()
      setProductDataapi(data)
      setFilteredProducts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const filterdata = (searchdata) => {
    let fliterProduct = productDataapi.filter((val) => {
      return val.title.toLowerCase().includes(searchdata.toLowerCase())
    })

    setFilteredProducts(fliterProduct)
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCartSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="p-4">
        <Filters filterdata={filterdata} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4">
        {filteredProducts.map((val) => (
          <ProductData key={val.id} product={val} />
        ))}
      </div>
    </>
  )
}

export default Shoppage

