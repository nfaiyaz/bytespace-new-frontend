import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

const categories = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
];

const courses = [
  {
    id: "figma-basics",
    title: "Learn Figma from Basic",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "12 Lessons",
  },
  {
    id: "big-data",
    title: "The Power of Big Data",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "17 Lessons",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Work",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "20 Lessons",
  },
  {
    id: "money",
    title: "Mastering Money Management",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "18 Lessons",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    creator: "PurePearl Studio",
    price: "$25",
    rating: "4.5",
    lessons: "15 Lessons",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero grid-bg">
        <Header />

        <div className="hero-content">
          <h1>
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="hero-description">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="hero-search">
            <div className="hero-search-field">
              <span>⌕</span>
              <input placeholder="Course, topic, creator" />
            </div>

            <button className="lime-button">
              Search
            </button>
          </div>
        </div>

        <div className="hero-stat hero-progress">
          <div className="progress-title">
            Learning Progress
          </div>

          <div className="progress-number">
            55%
          </div>

          <div className="progress-bar">
            <span />
          </div>
        </div>

        <div className="hero-stat hero-students">
          <div className="progress-title">
            Happy Students
          </div>

          <strong style={{ fontSize: "20px" }}>
            4.5 (240)
          </strong>
        </div>

        <div className="hero-image">
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #d4fb20 0%, #ffffff 45%, #242528 46%, #242528 100%)",
              boxShadow: "0 30px 70px rgba(0,0,0,.2)",
            }}
          />
        </div>
      </section>

      <section className="logo-strip">
        <div className="container logo-strip-inner">
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
          <div className="logo-placeholder">Logoipsum</div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="category-heading">
            <div>
              <small>Featured Categories</small>

              <h2 className="section-title">
                Innovative Paths to Knowledge
              </h2>
            </div>

            <Link to="/search" className="view-more">
              View More
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div className="category-card" key={category}>
                <div className="category-icon" />
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section center-section">
        <div className="container">

          <h2 className="section-title">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>

          <p className="section-subtitle">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>

          <div className="course-grid course-grid-large">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section center-section">
        <div className="container">

          <h2 className="section-title">
            Explore Diverse Learning
            <br />
            Paths at Bytespace
          </h2>

          <p className="section-subtitle">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone.
          </p>

          <div className="category-grid" style={{ marginTop: 48 }}>
            {categories.map((category) => (
              <div className="category-card" key={category}>
                <div className="category-icon" />
                <span>{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="creator-cta grid-bg">
        <div className="container creator-cta-inner">

          <h2>
            Unlock Your Potential as a Creator
            with ByteSpace
          </h2>

          <p>
            Experience the collaborative spirit of ByteSpace and connect
            with creators, learners and professionals who are building
            meaningful skills.
          </p>

          <Link to="/register" className="lime-button">
            Join as Creator
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">

          <div className="center-section">
            <h2 className="section-title">
              Discover What Our
              <br />
              Community Is Saying
            </h2>

            <p className="section-subtitle">
              Hear from learners and creators who use ByteSpace to build
              skills and explore new possibilities.
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial">
              <p>
                ByteSpace made learning feel simple and practical. The
                course structure helped me stay focused.
              </p>
              <div className="testimonial-name">
                Sarah M.
              </div>
            </article>

            <article className="testimonial">
              <p>
                The variety of courses and clear explanations made it easy
                to keep learning consistently.
              </p>
              <div className="testimonial-name">
                James L.
              </div>
            </article>

            <article className="testimonial">
              <p>
                I found useful courses for both creative and professional
                skills in one place.
              </p>
              <div className="testimonial-name">
                Alex R.
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}