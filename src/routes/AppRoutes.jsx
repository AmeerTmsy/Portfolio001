// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import FeaturedProjects from "../pages/FeaturedProjects";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import Experience from "../pages/Experience";

function AppRoutes() {
  return (
    <Routes>
      {/* LAYOUT */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured-project" element={<FeaturedProjects />}/>
        <Route path="/experience" element={<Experience />}/>
        <Route path="/featured-project/:slug" element={<ProjectDetailsPage />}/>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;