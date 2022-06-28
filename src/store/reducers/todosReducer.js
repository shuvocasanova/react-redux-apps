import { GET_TODOS_FAILURE, GET_TODOS_REQEUST, GET_TODOS_SUCCESS } from "../../constants/todosConstants";


const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQEUST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        
        todos: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_TODOS_FAILURE:
      return {
       
        error: action.payload,
        isLoading: false,
        todos: [],
      };
    default:
      return state;
  }
};

export default todosReducer;
