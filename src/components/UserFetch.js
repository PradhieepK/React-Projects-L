import { useQuery, gql } from "@apollo/client";
import React from "react";
import { useDispatch } from "react-redux";
import fetchUser from "../action/Action";
import { FETCH_USER } from "../actionType/ActionType";
import fetchUserReducer from "../reducer/Reducer";
import User from "./User";

const FETCHING_USER = gql`
  query {
    characters {
      results {
        id
        name
        gender
      }
    }
  }
`;
function UserFetch() {
  const dispatch = useDispatch();
  const { data, loading } = useQuery(FETCHING_USER);
  if (loading) return <h1>Loading...</h1>;
  dispatch(fetchUser(data));
  return (
    <div>
      <User />
    </div>
  );
}

export default UserFetch;
