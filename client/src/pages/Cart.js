import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../components/CartProduct';
import emptyCart from '../assets/empty.gif';
import {loadStripe} from '@stripe/stripe-js';
import toast from 'react-hot-toast';

const Cart = () => {

  const productCartItems = useSelector((state => state.product.cartItem))
  console.log(productCartItems)

  const totalPrice = productCartItems.reduce((acc,curr) => acc + parseInt(curr.total), 0)
  const totalQty = productCartItems.reduce((acc,curr) => acc + parseInt(curr.qty), 0)

  const handlePayment = async () => {
    console.log(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/checkout-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productCartItems)
    });
    
    const data = await res.json().catch(error => {
      console.error("Error parsing JSON response:", error);
      return null; // Return null in case of JSON parsing error
    });
    
    console.log("Response from server:", res);
    console.log("Parsed data:", data);
    
    if (!data) {
      // Handle the error or return early
      return;
    }
    
    toast("Redirect to payment gateway...!");
    
    stripePromise.redirectToCheckout({
      sessionId: data.sessionId
    });
    
  }

  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Cart</h2>
     
      {productCartItems[0] ? 
      <div className='my-4 flex gap-3'>
        {/* display cart items */}
        <div className='w-full max-w-3xl'>
          {
            productCartItems.map((el) => {
              return(
                <CartProduct 
                  key={el._id + "cartItem"}
                  id={el._id}
                  productName={el.productName}
                  image={el.image}
                  category={el.category}
                  price={el.price}
                  description={el.description}
                  qty={el.qty}
                  total={el.total}
                />
              )
            })
          }
        </div>

        {/* display total item */}
        <div className='w-full max-w-md ml-auto'>
          <p className='bg-blue-500 text-white p-2 text-lg'>Summary</p>
          <div className='flex w-full py-2 text-lg border-b'>
            <p>Total Quantity : </p>
            <p className='ml-auto w-32 font-bold'>{totalQty}</p>
          </div>
          <div className='flex w-full py-2 text-lg border-b'>
            <p>Total Price</p>
            <p className='ml-auto w-32 font-bold'><span className="text-red-500">₹</span>{totalPrice}</p>
          </div>
          <button className='bg-red-500 w-full text-lg font-bold text-white py-2' onClick={handlePayment}>Make Payment</button>
        </div>
      </div>
      : 
      <>
      <div className='flex w-full justify-center items-center pt-6 flex-col'>
        <img src={emptyCart} className='w-full max-w-sm'/>
        <p className='text-slate-500 text-3xl font-bold'>Cart is empty</p>
      </div>
      </>
}
    </div>
  )
}

export default Cart

