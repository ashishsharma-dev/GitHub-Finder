import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});

// Getting all users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  //   const { items } = await response.json();

  //   return items;

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Getting Single User
// export const getUser = async (username) => {
//   const response = await fetch(`${GITHUB_URL}/users/${username}`);

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };

// Getting User Repos
// export const getUserRepos = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`);
//   const data = await response.json();
//   return data;
// };

// Getting the single user and all repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};
