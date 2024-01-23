import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../fireBase/config";

const Movies = () => {
  const navigate = useNavigate();
  const [postLists, setPostList] = useState();
  const postCollectionref = collection(db, "movies");
  const getMovieData = async () => {
    const data = await getDocs(postCollectionref);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      <Layout title={"Movies"}>
        <div className="details-container">
          <div className="left-details">
            <h1 className="internship-heading">All Movies Data</h1>
            <div className="card-container">
              {postLists && postLists.length > 0 ? (
                postLists.map((item) => (
                  <div className="card" key={item.id}>
                    <img src={item.url} alt="" />
                    <h4 className="card-info">{item.title}</h4>
                    <button
                      className="l-n-btn"
                      style={{ backgroundColor: "" }}
                      onClick={() => navigate(`/movies/${item.id}`)}
                    >
                      Open
                    </button>
                  </div>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div>
          <div className="right-details"></div>
        </div>
      </Layout>
    </div>
  );
};

export default Movies;
