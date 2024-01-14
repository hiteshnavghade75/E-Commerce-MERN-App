import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList : []
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        setProuctData : (state, action) => {
            console.log(action)
            state.productList = [...action.payload]
        }
    }
})

export const { setProuctData } = productSlice.actions

export default productSlice.reducer