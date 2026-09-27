import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    // Vérifier si error.response existe et si error.response.data existe
    const errorMessage = error.response && error.response.data
      ? error.response.data.message // Utilisez error.response.data.message s'il existe
      : "An error occurred"; // Sinon, définissez un message d'erreur par défaut

    dispatch({
      type: "LoadUserFail",
      payload: errorMessage,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${server}/librarie/getSeller`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    const errorMessage = error.response && error.response.data
      ? error.response.data.message
      : "An error occurred";

    dispatch({
      type: "LoadSellerFail",
      payload: errorMessage,
    });
  }
};

// user update information
export const updateUserInformation =
  (name, email, phoneNumber, password) => async (dispatch) => {
    try {
      dispatch({
        type: "updateUserInfoRequest",
      });

      const { data } = await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        {
          withCredentials: true,
          // headers: {
          //   "Access-Control-Allow-Credentials": true,
          // },
        }
      );

      dispatch({
        type: "updateUserInfoSuccess",
        payload: data.user,
      });
    } catch (error) {
      const errorMessage = error.response && error.response.data
        ? error.response.data.message
        : "An error occurred";

      dispatch({
        type: "updateUserInfoFailed",
        payload: errorMessage,
      });
    }
  };
      


// get all users --- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllUsersRequest",
    });

    const { data } = await axios.get(`${server}/user/admin-all-users`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllUsersSuccess",
      payload: data.users,
    });
  } catch (error) {
    const errorMessage = error.response && error.response.data
      ? error.response.data.message
      : "An error occurred";

    dispatch({
      type: "getAllUsersFailed",
      payload: errorMessage,
    });
  }
};
