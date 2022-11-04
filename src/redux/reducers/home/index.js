import { GET_LIST_DATA_ERROR, GET_LIST_DATA_REQUEST, GET_LIST_DATA_SUCCESS } from "redux/constants";

const initialState = {
  requesting: false,
  success: false,
  message: null,
  data: null
}

function getListDataDpRoadReducers(state = initialState, payload) {
  switch (payload.type) {
    case GET_LIST_DATA_REQUEST:
      return {
        ...state,
        requesting: true
      };
    case GET_LIST_DATA_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
      };
    case GET_LIST_DATA_ERROR:
      return {
        ...state,
        requesting: false,
        message: payload.message
      };

    default:
      return state;
  }
}

export default getListDataDpRoadReducers;