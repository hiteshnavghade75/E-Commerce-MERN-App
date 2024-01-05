import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { ImageToBase64 } from '../utils/base-64';

const NewProduct = () => {
    
  const [formData, setFormData] = useState({
    productName : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => {
      return{
        ...prev,
        [name] : value
      }
    })
  }
   
  const handleUploadImage = async(e) => {
    const data = await ImageToBase64(e.target.files[0])
    setFormData((prev) => {
      return{
        ...prev, 
        image : data
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-4 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='productName'>Product Name</label>
        <input type='text' name='productName' className='bg-slate-200 p-1 my-1' onChange={handleOnChange}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name='category' onChange={handleOnChange}>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>IceCream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
          { formData.image ? <img src={formData.image} alt='product-image' className='h-full'/> : <span className='text-5xl'>
          <IoCloudUploadOutline/>
          </span>  }
          <input type='file' id='image' name='image' accept='image/*' onChange={handleUploadImage} className='hidden'/>
        </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input type='text' name='price' className='bg-slate-200 p-1 my-1' onChange={handleOnChange}/>

        <label htmlFor='description'>Description</label>
        <textarea rows={2} name='description' className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange}/>

        <button className='bg-red-400 hover:bg-red-500 text-white text-lg font-medium drop-shadow my-2'>Add Product</button>

      </form>
    </div>
  )
}

export default NewProduct