import { axiosInstance } from "../config/axiosInstance";

  export const getProductData = async () => {
    try {
      const res = await axiosInstance('/products');
     return res.data.products;
    } catch (error) {
      console.log("error", error);
    } 
  }
