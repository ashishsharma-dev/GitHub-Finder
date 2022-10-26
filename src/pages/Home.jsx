import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import { useContext, useEffect } from "react";
import GithubContext from "../Context/github/GithubContext";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const { users } = useContext(GithubContext);

  return (
    <div>
      <UserSearch />
      {users.length === 0 ? (
        <div
          className="hide"
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            fontSize: "20rem",
          }}
        >
          <FaGithub className="wave" />
        </div>
      ) : (
        ""
      )}
      <UserResults />
    </div>
  );
};

export default Home;
