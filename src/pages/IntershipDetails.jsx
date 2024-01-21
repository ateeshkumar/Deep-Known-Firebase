import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { auth, db } from "../fireBase/config";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import "./css/internshipdetails.css";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
const IntershipDetails = () => {
  const { slug } = useParams();
  const [postLists, setPostList] = useState();
  const postsCollectionRef = collection(db, "internship");
  const getInternshipData = async () => {
    const data = await getDocs(postsCollectionRef);
    const data1 = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPostList();
    console.log(
      data1.filter((item) => {
        item.slug == slug;
      })
    );
  };
  useEffect(() => {
    getInternshipData();
  }, []);
  console.log(postLists);
  return (
    <div>
      <Layout title={"Deep Known-internship"}>
        <div className="internship-container">
          <div className="left-internship-content">
            <h1 className="internship-heading">All Internship Details</h1>
            {postLists ? (
              <div className="card-content-constiner">
                <div className="card-head-container">Title</div>
                <h2 className="card-title">Title: {postLists.title}</h2>
                <div className="card-head-container">Profile</div>
                <h4 className="card-details">Profile: {postLists.profile}</h4>
                <div className="card-head-container">Expriences</div>
                <h4 className="card-details">
                  Expriences: {postLists.expriences}
                </h4>
                <div className="card-head-container">Remote</div>
                <h4 className="card-details">Remote: {postLists.remote}</h4>
                <div className="card-head-container">Location</div>
                <h4 className="card-details">Location: {postLists.location}</h4>
                <div className="card-head-container">Skills</div>
                <h4 className="card-details">Skills: {postLists.skills}</h4>
                <div className="card-head-container">Stipend</div>
                <h4 className="card-details">Stipend: {postLists.stipend}</h4>
                <div className="card-head-container">Description</div>
                <p className="card-description">
                  Description: {postLists.description}
                </p>
                <div className="card-head-container">Click to Open</div>
                <p>
                  Click Here To Open: <a href={postLists.link}>Click Here</a>
                </p>
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

export default IntershipDetails;
