import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { auth, db } from "../fireBase/config";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import "./css/internship.css";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
const Jobs = () => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "jobs");
  const navigate = useNavigate();
  const getInternshipData = async () => {
    const data = await getDocs(postsCollectionRef);
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getInternshipData();
  }, []);
  return (
    <div>
      <Layout title={"Deep Known- jobs"}>
        <div className="details-container">
          <div className="left-details">
            <h1 className="internship-heading">All jobs Data</h1>
            <div className="card-container">
              {postLists && postLists.length > 0 ? (
                postLists.map((item) => (
                  <div className="card" key={item.id}>
                    <h4 className="card-info">{item.profile}</h4>
                    <h4 className="card-info">{item.expriences}</h4>
                    <h4 className="card-info">{item.stipend}</h4>
                    <h4 className="card-info">{item.location}</h4>
                    <button
                      className="l-n-btn"
                      style={{ backgroundColor: "" }}
                      onClick={() => navigate(`/jobs/${item.id}`)}
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

export default Jobs;
