import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Layout from "../../components/Layout";
import { db, auth, storage } from "../../fireBase/config";
import AdminLayout from "../../components/AdminLayout";
import "./css/alladmin.css";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const AdminMovies = () => {
  // const [blogs, setBlogs] = useState({
  //   title: "",
  //   category: "",
  //   link: "",
  // content: "",
  // time: Timestamp.now(),
  // });
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const [loader, Setloader] = useState(false);
  const [thumbnail, setThumbnail] = useState();
  // console.log(thumbnail);
  const postCollectionRef = collection(db, "movies");
  const navigate = useNavigate();

  const addPost = async () => {
    // if (
    //   blogs.title === "" ||
    //   blogs.category === "" ||
    //   blogs.content === "" ||
    //   blogs.thumbnail === ""
    // ) {
    //   toast.warn("Please Fill All Fields");
    // }
    // console.log(blogs.content);
    uploadImage();
    Setloader(false);
  };

  const uploadImage = () => {
    // if (!thumbnail) return;
    Setloader(true);
    const imageRef = ref(storage, `blogimage`);
    console.log(imageRef);
    // uploadBytes(imageRef, thumbnail).then((snapshot) => {
    // getDownloadURL(snapshot.ref).then((url) => {
    //   console.log(url);
    const productRef = collection(db, "movies");
    try {
      addDoc(productRef, {
        title,
        link,
        url,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      navigate("/account/admin/");
      toast.success("Post Added Successfully");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
    // });
    // });
  };
  const [text, settext] = useState("");

  const createMarkup = (c) => {
    return { _html: c };
  };
  return (
    <div>
      <Layout>
        <AdminLayout>
          <form onSubmit={addPost} className="internship-form-contaner">
            <input
              type="text"
              placeholder="Enter Your Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="link"
              placeholder="Enter Your link"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <input
              type="file"
              lable="upload thumbnail"
              placeholder="Upload Your Thumbnail"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />

            <Editor
              apiKey="2yo7fjto3bfr6ggodipq1he07efadq9cmailfmn9inm75c6t"
              onEditorChange={(newValue, editor) => {
                // setBlogs({ ...blogs, content: newValue });
                // settext(editor.getContent({ format: "text" }));
              }}
              onInit={(evt, editor) => {
                // settext(editor.getContent({ format: "text" }));
              }}
              init={{
                height: 500,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                ],
              }}
            />
            {/* Five Submit Button  */}
            <button className="l-n-btn" type="submin">
              {loader ? <Loader /> : "Submit"}
            </button>
          </form>

          {/* <div className="">
            <h1 className=" text-center mb-3 text-2xl">Preview</h1>
            <div className="content">
              <div
                className={``}
                {createMarkup(blogs.content)}
              ></div>
            </div>
          </div> */}
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default AdminMovies;
