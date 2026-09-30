import { Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { useState } from "react";

const tabs = [
  "Featured",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
];

export default function Search() {
  const [activeTab, setActiveTab] = useState("Featured");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeTab === "Featured" ||
      course.category.toLowerCase().includes(activeTab.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">COURSES</span>
            <h1>Explore Courses</h1>
            <p>Find your next skill and start learning today.</p>

            <div className="large-search">
              <SearchIcon size={20} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search course, topic or creator"
              />
              <button>
                <SlidersHorizontal size={19} />
                Filters
              </button>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="tabs">
              {tabs.map((tab) => (
                <button
                  className={activeTab === tab ? "tab active" : "tab"}
                  onClick={() => setActiveTab(tab)}
                  key={tab}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="search-result-head">
              <h2>{activeTab}</h2>
              <span>{filteredCourses.length} courses</span>
            </div>

            <div className="course-grid">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <CourseCard course={course} key={course.id} />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No courses found</h3>
                  <p>Try another search or category.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}