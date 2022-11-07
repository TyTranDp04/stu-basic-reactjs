import { DP_ABOUT_ROAD_URL, URL_ALUMNI_SAYING } from "api/urls";
import { GET_LIST_DATA_ERROR, GET_LIST_DATA_REQUEST, GET_LIST_DATA_SUCCESS } from "redux/constants";


export const getListDataDpRoad = () => async dispatch => {
  try {
    dispatch({ type: GET_LIST_DATA_REQUEST });

    const url = DP_ABOUT_ROAD_URL;
    const response = await fetch(url)
    const responseBody = await response.json();
    dispatch({
      type: GET_LIST_DATA_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_LIST_DATA_ERROR,
      message: error
    });
  }
}

export const getListDataAlumniSaying = () => async dispatch => {
  try {
    dispatch({ type: GET_LIST_DATA_REQUEST });

    const url = URL_ALUMNI_SAYING;
    const response = await fetch(url)
    const responseBody = await response.json();
    dispatch({
      type: GET_LIST_DATA_SUCCESS,
      data: responseBody
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: GET_LIST_DATA_ERROR,
      message: error
    });
  }
}