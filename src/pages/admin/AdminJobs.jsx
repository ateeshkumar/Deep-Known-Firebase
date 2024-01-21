import React, { useState } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Layout from "../../components/Layout";
import { db, auth } from "../../fireBase/config";
import AdminLayout from "../../components/AdminLayout";
import "./css/alladmin.css";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
const AdminJobs = () => {
  const [title, setTitle] = useState("");
  const [profile, setProfile] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [expriences, setExpriences] = useState("");
  const [stipend, setStipend] = useState("");
  const [remote, setRemote] = useState("");
  const [link, setLink] = useState("");
  const postCollectionRef = collection(db, "jobs");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postCollectionRef, {
        title,
        slug: slugify(title),
        profile,
        description,
        skills,
        location,
        expriences,
        stipend,
        remote,
        time: Timestamp.now(),
      });
      navigate("/account/admin/jobs");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Layout>
        <AdminLayout>
          <form onSubmit={handleSubmit} className="internship-form-contaner">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Job Profile"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              required
            />
            <textarea
              name="text"
              placeholder="Job Descriptio"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <textarea
              name="text"
              placeholder="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Expriences"
              value={expriences}
              onChange={(e) => setExpriences(e.target.value)}
            />
            <input
              type="text"
              placeholder="salary"
              value={stipend}
              onChange={(e) => setStipend(e.target.value)}
            />
            <input
              type="text"
              placeholder="Remote Policy"
              value={remote}
              onChange={(e) => setRemote(e.target.value)}
            />
            <input
              type="link"
              placeholder="Link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <input type="submit" placeholder="Text" />
          </form>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default AdminJobs;
