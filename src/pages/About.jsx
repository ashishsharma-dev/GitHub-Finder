import React from "react";
import {
  FaGithub,
  FaIdCard,
  FaInstagram,
  FaLinkedin,
  FaSmile,
} from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl mb-4">Github Finder</h1>
      <p className="mb-4 text-xl font-md">
        It's a Github User Finder 🚀 application made with React JS, Tailwind
        CSS and Daisy UI Components. I made this application with the
        association of Brad Traversy from Traversy Media. Thank You Brad...😊
      </p>
      <p className="mb-4 text-xl font-md">
        Connect with Me:
        <a
          href="https://github.com/ashishsharma-dev"
          target="_blank"
          className="btn btn-primary btn-sm mx-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashishsharma-dev/"
          target="_blank"
          className="btn btn-primary btn-sm mr-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://personalportfoliotheme.ashishsharma56.repl.co/"
          target="_blank"
          className="btn btn-primary btn-sm mr-2"
        >
          <FaIdCard />
        </a>
      </p>
    </div>
  );
};

export default About;
