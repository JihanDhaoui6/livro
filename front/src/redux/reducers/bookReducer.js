import { createReducer } from '@reduxjs/toolkit';

// const initialState = {
//     isLoading: true,
//     books: [],
//     recommendedBooks: [],
// };

// export const bookReducer = createReducer(initialState, {
//     // Autres actions...

//     getRecommendedBooksRequest: (state) => {
//         state.isLoading = true;
//     },
//     getRecommendedBooksSuccess: (state, action) => {
//         state.isLoading = false;
//         state.recommendedBooks = action.payload;
//     },
//     getRecommendedBooksFailed: (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//     },
//     clearErrors: (state) => {
//         state.error = null;
//     },
// });


const initialState = {
    recommendations: [],
    error: null,
  };
  
  const recommendationsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECOMMENDATIONS_FETCHED':
        return { ...state, recommendations: action.payload, error: null };
      case 'RECOMMENDATIONS_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  
  export default recommendationsReducer;