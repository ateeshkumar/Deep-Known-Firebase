import React from "react";
import Layout from "../../components/Layout";
import "./css/admindashboard.css";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
const AdminDashord = () => {
  return (
    <div>
      <Layout title={"admin"}>
        <AdminLayout></AdminLayout>
      </Layout>
    </div>
  );
};

export default AdminDashord;
