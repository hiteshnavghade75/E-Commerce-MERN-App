import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import Card from "./Card";
import { useSelector } from "react-redux";

const AllProducts = ({ heading }) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((el) => el.category))];

  // Filter data display
  const [filterBy, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayCard = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold text-slate-800 text-2xl mb-4">{heading}</h2>
      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ? (
          categoryList.map((el, index) => {
            return (
              <FilterProduct
                category={el}
                onClick={() => handleFilterProduct(el)}
                key={index}
              />
            );
          })
        ) : (
          <div className="min-h-[150px] flex justify-center items-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter[0]
          ? dataFilter.map((el) => {
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
          : loadingArrayCard.map((el, index) => (
              <Card loading={"loading"} key={index} />
            ))}
      </div>
    </div>
  );
};

export default AllProducts;
