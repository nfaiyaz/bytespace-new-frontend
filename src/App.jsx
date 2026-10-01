import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import CourseDetails from "./pages/CourseDetails";
import CourseLessons from "./pages/CourseLessons";
import CourseReviews from "./pages/CourseReviews";
import CreatorProfile from "./pages/CreatorProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/search" element={<Search />} />

      <Route path="/course/:id" element={<CourseDetails />} />

      <Route
        path="/course/:id/lessons"
        element={<CourseLessons />}
      />

      <Route
        path="/course/:id/reviews"
        element={<CourseReviews />}
      />

      <Route
        path="/creator/:id"
        element={<CreatorProfile />}
      />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}