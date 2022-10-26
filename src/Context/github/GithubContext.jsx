import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";
const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loader: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Fetch Users Coution:For Testing purpose only
  // const fetchUsers = async () => {
  //   setLoader();
  //   const response = await fetch(`${GITHUB_URL}/users`);
  //   console.log(`${GITHUB_URL}/users`);
  //   const data = await response.json();

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  // For Searching the users
  const searchUsers = async (text) => {
    setLoader();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await response.json();

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Getting single user

  const getUser = async (username) => {
    setLoader();

    const response = await fetch(`${GITHUB_URL}/users/${username}`);

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

  // Getting all the repos
  const getUserRepos = async (login) => {
    setLoader();

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);
    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  // For clearing the search arr
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    });
  };

  // Loader GIF
  const setLoader = () => {
    return dispatch({
      type: "SET_LOADER",
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loader: state.loader,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
