import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    isLoading: false
}

export const getProducts = createAsyncThunk('getUsers', async(arg, {rejectWithValue, getState}) => {
    try {
        console.log('inside get products')
        const data = await fetch('https://dummyjson.com/products')
        const res = await data.json();

        return res
    } catch (error) {
        rejectWithValue(error.message)
    }
})

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            console.log('form redux', item)
            const existingItem = [...state.cart].find(i => i.id === item.id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.cart.push({ ...item, quantity: 1 });
            }
          },
        removeFromCart: (state, action) => {
            const item = action.payload
            const filterItem = state.cart.filter((it) => it.id === item.id)

            if(filterItem.length && filterItem[0].quantity === 1){
                state.cart = state.cart.filter((it) => it.id !== item.id)
            } else if(filterItem.length && filterItem[0].quantity > 1){
                filterItem[0].quantity -=1
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            console.log('data from api---', action.payload.products)
            state.isLoading = false
            state.products = action.payload.products
        })
    }
})

export default appSlice.reducer
export const {addToCart, removeFromCart} = appSlice.actions