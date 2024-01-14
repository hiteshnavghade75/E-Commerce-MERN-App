import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProducts from "../components/AllProducts";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  console.log(productData);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];
  console.log(productDisplay);

  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl bg-white m-auto md:flex">
        <div className="max-w-sm overflow-hidden p-5 w-full">
          <img
            src={productDisplay.image}
            alt="product"
            className="hover:scale-105 transition-all h-full"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 md:text-4xl capitalize ">
            {productDisplay.productName}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold md:text-2xl">
            <span className="text-red-500">₹</span>
            {productDisplay.price}
          </p>
          <div className="flex gap-3">
            <button className="bg-red-500 text-white hover:bg-red-600 rounded-md  mt-2 min-w-[150px] py-1">
              Buy
            </button>
            <button className="bg-red-500 text-white hover:bg-red-600 rounded-md  mt-2 min-w-[150px] py-1">
              Add To Cart
            </button>
          </div>
          <div className="">
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProducts heading={"Related Products"}/>
    </div>
  );
};

export default Menu;
