import React from "react";
import Layout from "../../components/Layout";
import AdminLayout from "../../components/AdminLayout";

const Movies = () => {
  return (
    <div>
      <Layout>
        <AdminLayout>
          <form action="" className="internship-form-contaner">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="submit" />
          </form>
        </AdminLayout>
      </Layout>
    </div>
  );
};

export default Movies;
