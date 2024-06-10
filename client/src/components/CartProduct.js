import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { decreaseQty, deleteCartItems, increaseQty } from "../redux/productSlice";

const CartProduct = ({
  id,
  productName,
  image,
  category,
  price,
  description,
  qty,
  total,
}) => {

    const dispatch = useDispatch()
  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} className="h-28 w-36 object-cover" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600 text-lg md:text-xl capitalize ">
            {productName}
          </h3>
          <div className="cursor-pointer text-slate-700 hover:text-red-500" onClick={() => dispatch(deleteCartItems(id))}>
            <RiDeleteBin6Line />
          </div>
        </div>
        <p className="text-slate-500 font-medium ">{category}</p>
        <p className="font-bold text-base">
          <span className="text-red-500">₹</span>
          {price}
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button onClick={() => dispatch(increaseQty(id))} className="bg-slate-300 hover:bg-slate-400 rounded-md  mt-2 py-1 text-2xl p-1">
              <FaPlus />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button onClick={() => dispatch(decreaseQty(id))} className="bg-slate-300 hover:bg-slate-400 rounded-md  mt-2 py-1 text-2xl p-1">
              <FaMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total : </p>
            <p><span className="text-red-500">₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
