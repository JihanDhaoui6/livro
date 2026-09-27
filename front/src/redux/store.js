
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";
import { sellerReducer } from "./reducers/seller";
import { bookReducer } from "./reducers/book";
import { eventReducer}  from "./reducers/event"
import {cartReducer}  from "./reducers/cart"
import {wishlistReducer}  from "./reducers/wishlist"
import { orderReducer } from "./reducers/order";



const Store = configureStore({
    reducer: {
      user: userReducer,
      seller: sellerReducer,
      book: bookReducer,
      books: bookReducer,
     

      events: eventReducer,
     order: orderReducer,
      cart:cartReducer,
      wishlist:wishlistReducer,
      
    },
  });
  
  export default Store;