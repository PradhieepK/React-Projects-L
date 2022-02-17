import { FETCH_USER } from "../actionType/ActionType";

const fetchUser = (users) => {
  return {
    type: FETCH_USER,
    payload: users,
  };
};

export default fetchUser;
