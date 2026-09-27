// import axios from "axios";
// import { server } from "../../server";

// // create event
// export const createEvent = (newForm) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "eventCreateRequest",
//     });
//     const config = { headers: { "Content-Type": "multipart/form-data" } };
//     const { data } = await axios.post(
//       `${server}/event/create-event`,
//       newForm,
//       config
//     );
//     dispatch({
//       type: "eventCreateSuccess",
//       payload: data.event,
//     });
//   } catch (error) {
//     dispatch({
//       type: "eventCreateFail",
//       payload: error.response.data.message,
//      // payload: error.response ? error.response.data.message : "Unknown error",
   
//     });
//   }
// };

// //get all book library
// export const getAllEventsLibrarie = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAllEventsLibrarieRequest",
//     });

//     const { data } = await axios.get(
//       `${server}/event/get-all-events/${id}`);
//     dispatch({
//       type: "getAllEventsLibrarieSuccess",
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAllEventsLibrarieFailed",
//       payload: error.response.data.message,
//     });
//   }
// };
// // delete event of librarie
// export const deleteEvent = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "deleteeventRequest",
//     });

//     const { data } = await axios.delete(
//       `${server}/event/delete-librarie-event/${id}`,
//       {
//         withCredentials: true,
//       }
//     );

//     dispatch({
//       type: "deleteeventSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "deleteeventFailed",
//       payload: error.response.data.message,
//     });
//   }
// };


// // get all events
// export const getAllEvents = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: "getAlleventsRequest",
//     });
    
//     const { data } = await axios.get(`${server}/event/get-all-events`);
//     dispatch({
//       type: "getAlleventsSuccess",
//       payload: data.events,
//     });
//   } catch (error) {
//     dispatch({
//       type: "getAlleventsFailed",
//       payload: error.response.data.message,
//     });
//   }
// };





import axios from "axios";
import { server } from "../../server";

// create event
export const createEvent = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });

    const d = await axios.post(`${server}/event/create-event`, data);
    dispatch({
      type: "eventCreateSuccess",
      payload: d.data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all events of a lib
export const getAllEventsLibrarie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsLibrarieRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "getAlleventsLibrarieSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsLibrarieFailed",
      payload: error.response.data.message,
    });
  }
};

// delete event of a lib
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteeventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-librarie-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteeventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteeventFailed",
      payload: error.response.data.message,
    });
  }
};

// get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAlleventsRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({
      type: "getAlleventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAlleventsFailed",
      payload: error.response.data.message,
    });
  }
};