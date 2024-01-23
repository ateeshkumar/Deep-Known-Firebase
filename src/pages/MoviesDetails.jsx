import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../fireBase/config";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "@orrisroot/react-html-parser";

const MoviesDetails = () => {
  const conRef = useRef();
  const { slug } = useParams();
  const [postLists, setPostLists] = useState();
  const getMoviesData = async () => {
    const productTemp = await getDoc(doc(db, "movies", slug));
    setPostLists(productTemp.data());
  };
  useEffect(() => {
    getMoviesData();
  }, [slug]);
  return (
    <div>
      <Layout title={"Deep Known-movies Details"}>
        <div className="internship-container">
          <div className="left-internship-content">
            <h1 className="internship-heading">Movie Details</h1>
            {postLists ? (
              <div className="card-content-constiner">
                <div className="card-head-container">Title</div>
                <h2 className="card-title">Title: {postLists.title}</h2>
                <div className="card-head-container">Thumbnail</div>
                <img src={postLists.url} alt="Logo" />
                <div className="card-head-container">Details</div>
                <p className="card-description" ref={conRef}>
                  Description: {ReactHtmlParser(postLists.content)}
                </p>
                <div className="card-head-container">Click to Download</div>
                <sapn className="internship-link">
                  Click Here To Download:{" "}
                  <a href={postLists.link} target="_balnk">
                    Click Here
                  </a>
                </sapn>
              </div>
            ) : (
              <Loader />
            )}
          </div>
          <div className="right-internship-content"></div>
        </div>
      </Layout>
    </div>
  );
};

export default MoviesDetails;
