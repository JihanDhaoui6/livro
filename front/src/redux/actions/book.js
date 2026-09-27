import axios from "axios";
import { server } from "../../server";

//create book
export const createBook = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "bookCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/book/create-post`,
      newForm,
      config
    );
    dispatch({
      type: "bookCreateSuccess",
      payload: data.book,
    });
  } catch (error) {
    dispatch({
      type: "bookCreateFail",
      payload: error.response.data.message,
    });
  }
};


export const deleteBook = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteBookRequest",
    });

    const { data } = await axios.delete(
      `${server}/book/delete-librarie-book/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteBookSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteBookFailed",
      payload: error.response.data.message,
    });
  }
};
export const getAllBooksLibrarie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBooksLibrarieRequest",
    }); 

    const { data } = await axios.get(`${server}/book/get-all-books-librarie/${id}`);
    dispatch({
      type: "getAllBooksLibrarieSuccess",
      payload: data.books,
    });
  } catch (error) {
    dispatch({
      type: "  getAllBooksLibrarieFailed",
      payload: error.response.data.message,
    });
  }
}








export const getAllBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllBooksRequest",
    });

    const { data } = await axios.get(`${server}/book/get-all-books`);
    dispatch({
      type: "getAllBooksSuccess",
      payload: data.books,
    });

  } catch (error) {
    dispatch({
      type: "getAllBooksFailed",
      payload: error.response.data.message,
    });
  }
};













