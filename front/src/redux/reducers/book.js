import {createReducer} from "@reduxjs/toolkit";
const initialState = {
    isLoading: true,
}

export const bookReducer = createReducer(initialState, {
    bookCreateRequest: (state) => {
      state.isLoading = true;
    },
    bookCreateSuccess: (state, action) => {
        state.isLoading = false;
        state.book = action.payload;
        state.success = true;
      },
    productCreateFail: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      },
        // get all books 
        getAllBooksLibrarieRequest:(state) =>{
          state.isLoading= true;
        },
        getAllBooksLibrarieSuccess:(state , action)=>{
          state.isLoading = false;
          state.books = action.payload;
        },
        getAllBooksLibrarieFailed:(state , action)=>{
          state.isLoading = false;
          state.error = action.payload;
        },

        //delet book de library


          // Suppression d'un livre
       

       
      
        deleteBookRequest: (state) => {
          state.isLoading = true;
        },
        deleteBookSuccess: (state, action) => {
          state.isLoading = false;
          state.message = action.payload;
        },
        deleteBookFailed: (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      

 // get all bookssssss
 getAllBooksRequest: (state) => {
  state.isLoading = true;
},
getAllBooksSuccess: (state, action) => {
  state.isLoading = false;
  state.allBooks = action.payload;
},
getAllBooksFailed: (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
},





    clearErrors: (state) =>{
        state.error= null;
    },

})


