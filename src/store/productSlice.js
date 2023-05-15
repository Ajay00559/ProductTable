import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
    product: [],
    error: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadproduct: (state, action) => {
            console.log(action.payload)
            state.product = action.payload;
             
            state.error = null;
             

        },
        
    },
});

 

 
export const { loadproduct } = productSlice.actions;

export default productSlice.reducer;