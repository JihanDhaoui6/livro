import {createReducer} from "@reduxjs/toolkit";
const initialState = {
    isLoading: true,
}

export const orderReducer = createReducer(initialState, {
 
        // get all orders 
        getAllOrdersUserRequest:(state) =>{
          state.isLoading= true;
        },
        getAllOrdersUserSuccess:(state , action)=>{
          state.isLoading = false;
          state.orders = action.payload;
        },
        getAllOrdersUserFailed:(state , action)=>{
          state.isLoading = false;
          state.error = action.payload;
        },

       
        getAllOrdersLibrarieRequest: (state) => {
          state.isLoading = true;
        },
        getAllOrdersLibrarieSuccess: (state, action) => {
          state.isLoading = false;
          state.orders = action.payload;
        },
        getAllOrdersLibrarieFailed: (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },


    clearErrors: (state) =>{
        state.error= null;
    },

})