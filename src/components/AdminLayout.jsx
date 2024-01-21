import React from "react";
import { Link } from "react-router-dom";
import "./css/adminlayout.css";
const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="admin-layout-container">
        <div className="admin-sidebar">
          <ul className="admin-list-container">
            <li className="admin-list">
              <Link to="/account/admin/internship" className="admin-links">
                Internship
              </Link>
            </li>
            <li className="admin-list">
              <Link to="/account/admin/jobs" className="admin-links">
                jobs
              </Link>
            </li>
            <li className="admin-list">
              <Link to="/account/admin/new-movies" className="admin-links">
                New Movies
              </Link>
            </li>
            <li className="admin-list">
              <Link to="/account/admin/movies" className="admin-links">
                Movies
              </Link>
            </li>
          </ul>
        </div>
        <div className="admin-main">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
