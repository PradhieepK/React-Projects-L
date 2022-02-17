import { FETCH_USER } from "../actionType/ActionType";
  

const initialState = {
  users: [],
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default fetchUserReducer;
