import React from "react";
import Layout from "../components/Layout";
import community from "../assets/community-landing.png";
import feature from "../assets/feature_1.png";
import feature2 from "../assets/jobs.png";
import newMovie from "../assets/newMovie.gif";
import movie from "../assets/movie.png";
import "./css/home.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const { googleSignIn, logOut, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Deep Known"}>
      {/* section first */}
      <div className="l-header-main">
        <div className="l-header-main-left">
          <h1 className="l-header-main-left-h1">
            Find your favourite job internship movies and channel of telegram.
          </h1>
          <p className="l-header-main-left-p">
            This site work as a third party which is provide all jobs,internship
            and entertainement link of others paltform you can click to redirect
            on that website
          </p>
          <button
            className="l-n-btn"
            style={{ width: "300px", background: "#10ff04", margin: "30px 0" }}
            onClick={handleGoogleSignIn}
          >
            {user ? `Welcome, ${user?.displayName}` : "Join Our Community"}
          </button>
        </div>
        <div className="l-header-main-right">
          <img src={community} alt="Community" />
        </div>
      </div>

      {/* section second */}
      <div className="l-header-main1">
        <div className="l-header-main1-left1">
          <img src={feature} alt="Feature" />
        </div>
        <div className="l-header-main1-right1">
          <h1 className="l-header-main1-right1-h1">Intership</h1>
          <p className="l-header-main1-right1-p">
            An internship can vary depending on the specific requirements and
            goals of the internship program. However, here is a general outline
            that you can use as a starting point. This content can be adapted to
            fit the particular needs of your internship
          </p>
          <button
            className="l-n-btn"
            style={{ width: "200px", background: "#10ff04", margin: "30px 0" }}
            onClick={() => navigate("/internship")}
          >
            Internship
          </button>
        </div>
      </div>

      {/* section third */}
      <div className="l-header-main2">
        <div className="l-header-main2-left2">
          <h1 className="l-header-main2-left2-h1">Jobs</h1>
          <p className="l-header-main2-left2-p">
            A job application or resume involves showcasing your qualifications,
            skills, and experiences in a clear and compelling manner. Here's a
            general outline you can use as a template
          </p>
          <button
            className="l-n-btn"
            style={{ width: "200px", background: "#10ff04", margin: "30px 0" }}
            onClick={() => navigate("/jobs")}
          >
            Jobs
          </button>
        </div>
        <div className="l-header-main2-right2">
          <img src={feature2} alt="Feature" />
        </div>
      </div>
      {/* section fourth */}
      <div className="l-header-main1">
        <div className="l-header-main1-left1">
          <img src={movie} alt="Feature" />
        </div>
        <div className="l-header-main1-right1">
          <h1 className="l-header-main1-right1-h1">New Movies</h1>
          <p className="l-header-main1-right1-p">
            You can download all new relesed movie all movie is present there
            wich is download in hollywood, bollywood, South and in your local
            areas also webseries is included
          </p>
          <button
            className="l-n-btn"
            style={{ width: "200px", background: "#10ff04", margin: "30px 0" }}
            onClick={() => navigate("/new-movies")}
          >
            New Movies
          </button>
        </div>
      </div>
      {/* section fivth */}

      <div className="l-header-main2" style={{ backgroundColor: "#099284" }}>
        <div className="l-header-main2-left2">
          <h1 className="l-header-main2-left2-h1">Movies</h1>
          <p className="l-header-main2-left2-p" style={{ color: "#fff" }}>
            You can search all the movies from here in this website movie link
            provided and you can click to redirect on that page it is like south
            movies, hollywood movies, bollybood movies, all local movies.
          </p>
          <button
            className="l-n-btn"
            style={{ width: "200px", background: "#10ff04", margin: "30px 0" }}
            onClick={() => navigate("/movies")}
          >
            Movies
          </button>
        </div>
        <div className="l-header-main2-right2">
          <img
            src={newMovie}
            alt="Feature"
            // style={{ boxShadow: "39px 3px 67px 40px rgba(0,0,0,0.5)" }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
