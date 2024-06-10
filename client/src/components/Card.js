import React from "react";
import { Link } from "react-router-dom";
import { addCartItems, deleteCartItems } from "../redux/productSlice";
import { useDispatch } from "react-redux";

const Card = ({productName, image, price, category, description, loading, id, }) => {

  const dispatch = useDispatch();

  const handleAddToCartProduct = (e) => {
    e.stopPropagation();
    dispatch(addCartItems({
      _id : id,
      productName : productName,
      image : image, 
      category : category,
      price : price
    }))
  };

  return (
    <div className="w-full min-w-[200px] , max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col rounded-md">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} alt="thumbnail" className="h-full" />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide">
              {productName}
            </h3>
            <p className=" text-slate-500 font-medium">{category}</p>
            <p className="font-bold">
              <span className="text-red-500">₹</span>
              {price}
            </p>
          </Link>
          <button
            className="bg-red-500 text-white hover:bg-red-600 w-full rounded-md py-1 mt-2"
            onClick={handleAddToCartProduct}
          >
            Add To Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
