import { GET_PEOPLE, GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, fetching: true };
    case GET_PEOPLE_SUCCESS:
      return { 
        ...state, 
        fetching: false, 
        characters: [...state.characters, ...action.payload]
      };
    case GET_PEOPLE_FAILURE:
      return { ...state, fetching: false, error: action.payload }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
