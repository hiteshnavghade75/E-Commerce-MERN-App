import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImageToBase64 } from "../utils/base-64";
import { toast } from "react-hot-toast";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    setFormData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const { productName, image, price, category } = formData;

    if (productName && image && price && category) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/product/addProduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const response = await fetchData.json();
      console.log(response);
      toast("Data sent successfully")
      setFormData({
        productName: "",
        category: "",
        image: "",
        price: "",
        description: ""
      })
    }else{
      toast("Entered required fields")
    }
  };


  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-md shadow flex flex-col p-4 bg-white"
        onSubmit={handleSubmit}
      >
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          name="productName"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={formData.productName}
        />

        <label htmlFor="category">Category</label>
        <select
          className="bg-slate-200 p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={formData.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetables"}>Vegetables</option>
          <option value={"icecream"}>IceCream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"paneer"}>Paneer</option>
          <option value={"sandwich"}>Sandwich</option>
        </select>

        <label htmlFor="image">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
            {formData.image ? (
              <img
                src={formData.image}
                alt="product-img"
                className="h-full"
              />
            ) : (
              <span className="text-5xl">
                <IoCloudUploadOutline />
              </span>
            )}
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleUploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          className="bg-slate-200 p-1 my-1"
          onChange={handleOnChange}
          value={formData.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          rows={2}
          name="description"
          className="bg-slate-200 p-1 my-1 resize-none"
          onChange={handleOnChange}
          value={formData.description}
        />

        <button className="bg-red-400 hover:bg-red-500 text-white text-lg font-medium drop-shadow my-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default NewProduct;



