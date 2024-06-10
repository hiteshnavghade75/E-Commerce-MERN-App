import React, { useEffect, useRef, useState } from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../components/FilterProduct";
import AllProducts from "../components/AllProducts";

const Home = () => {
  const productData = useSelector((state) => state.product.productList);

  const loadingArray = new Array(4).fill(null);
  const loadingArrayCard = new Array(10).fill(null);

  const homeProductCardList = productData.slice(2, 7);
  const homeProductsVegetables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );

  const slideProductRef = useRef();
  const handleNextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };

  const handlePreviousProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  const categoryList = [...new Set(productData.map((el) => el.category))];
 
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
            <img
              src="https://cdn2.iconfinder.com/data/icons/logistics-service/512/pizza_courier-2-512.png"
              alt="delivery-bike"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fastest Delivery To{" "}
            <span className="text-red-500">Your Home</span>
          </h2>
          <p className="py-3 text-base">
          Welcome to our online store! Explore a world of exquisite products and curated collections. Immerse yourself in the latest trends and timeless classics. Our carefully selected items reflect quality and style. Join us on a journey through the best in fashion, technology, and lifestyle. Discover the perfect blend of innovation and elegance. Shop with confidence as we bring you the finest selections. Embrace a shopping experience that transcends time – where tradition meets modernity. Your journey to exceptional finds begins here.
          </p>
          <button className="font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCardList[0]
            ? homeProductCardList.map((el) => {
                return (
                  <HomeCard
                    image={el.image}
                    id={el._id}
                    productName={el.productName}
                    price={el.price}
                    category={el.category}
                    description={el.description}
                    key={el._id}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-slate-800 text-2xl mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={handlePreviousProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={handleNextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductsVegetables[0]
            ? homeProductsVegetables.map((el) => {
                return (
                  <Card
                    image={el.image}
                    id={el._id}
                    productName={el.productName}
                    price={el.price}
                    category={el.category}
                    description={el.description}
                    key={el._id}
                  />
                );
              })
            : loadingArrayCard.map((el,index) => <Card loading={"loading..."} key={index} />)}
        </div>
      </div>

      <AllProducts heading={"Your Product"}/>

    </div>
  );
};

export default Home;
