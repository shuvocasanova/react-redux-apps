import axios from "axios";
import { API_URL, GET_TODOS_FAILURE, GET_TODOS_REQEUST, GET_TODOS_SUCCESS } from "../../constants/todosConstants";

export const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQEUST,
  });

    try {
      const res = await axios.get(API_URL);
      dispatch({
        type: GET_TODOS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      const errorMessage = err.message;
      dispatch({
        type: GET_TODOS_FAILURE,
        payload: errorMessage,
      });
    }
};
