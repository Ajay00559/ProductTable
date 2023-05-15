import { loadproduct } from "./productSlice";
 import axios from "axios"

export const asyncloadproducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get("https://dummyjson.com/products");
       console.log(data)
        dispatch(loadproduct(data.products));
    } catch (err) {
         console.log(err)
    }
};