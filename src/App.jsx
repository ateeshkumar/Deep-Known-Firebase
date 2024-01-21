import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NewMovies from "./pages/NewMovies";
import Movies from "./pages/Movies";
import IntershipDetails from "./pages/IntershipDetails";
import AdminDashord from "./pages/admin/AdminDashord";
import AdminInternship from "./pages/admin/AdminInternship";
import Privacy from "./pages/Privacy";
import TermCondition from "./pages/TermCondition";
import Internship from "./pages/Internship";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship/:slug" element={<IntershipDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/new-movies" element={<NewMovies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/term-condition" element={<TermCondition />} />
        //admin access
        <Route path="/account/admin" element={<AdminDashord />} />
        <Route path="/account/admin/internship" element={<AdminInternship />} />
      </Routes>
    </>
  );
}

export default App;
