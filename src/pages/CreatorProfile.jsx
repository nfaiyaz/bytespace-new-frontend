import { Star, Users, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function CreatorProfile() {
  return (
    <>
      <Header />

      <main>
        <section className="creator-hero grid-bg">
          <div className="container creator-profile">
            <div className="creator-avatar">PS</div>

            <div>
              <span className="eyebrow lime">COURSE CREATOR</span>
              <h1>PurePearl Studio</h1>
              <p>
                Helping students develop creative and practical digital
                skills through structured learning.
              </p>

              <div className="creator-stats">
                <span>
                  <Star size={17} /> 4.8 rating
                </span>
                <span>
                  <Users size={17} /> 4,200 students
                </span>
                <span>
                  <BookOpen size={17} /> 12 courses
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <span className="eyebrow">CREATOR COURSES</span>
            <h2>Courses by PurePearl Studio</h2>

            <div className="course-grid">
              {courses
                .filter((course) => course.creator === "PurePearl Studio")
                .map((course) => (
                  <CourseCard course={course} key={course.id} />
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}