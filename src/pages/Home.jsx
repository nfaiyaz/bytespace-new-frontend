import { Search, ArrowRight, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { categories, courses } from "../data/courses";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero grid-bg">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow lime">LEARN WITHOUT LIMITS</span>

              <h1>
                Get Access to
                <br />
                Hundreds Courses
                <br />
                Available
              </h1>

              <p>
                Learn from experienced creators and discover courses designed
                to help you build practical skills for the future.
              </p>

              <div className="hero-search">
                <Search size={20} />
                <input placeholder="Course, topic, creator" />
                <button>Search</button>
              </div>

              <div className="hero-actions">
                <Link to="/search" className="button button-lime">
                  Explore courses
                  <ArrowRight size={18} />
                </Link>

                <Link to="/register" className="button button-outline-white">
                  Start learning
                </Link>
              </div>
            </div>

            

            <div className="hero-stats">
              <div>
                <strong>200+</strong>
                <span>Courses</span>
              </div>

              <div>
                <strong>1000+</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>4.5</strong>
                <span>
                  <Star size={14} fill="currentColor" />
                  240 Reviews
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">DISCOVER</span>
                <h2>Featured Categories</h2>
                <p>
                  Explore diverse learning paths at ByteSpace and find the
                  skills that match your interests.
                </p>
              </div>

              <Link to="/search" className="text-link">
                View More <ArrowRight size={17} />
              </Link>
            </div>

            <div className="category-grid">
              {categories.map((category, index) => (
                <Link
                  to={`/search?category=${encodeURIComponent(category)}`}
                  className="category-card"
                  key={category}
                >
                  <span>0{index + 1}</span>
                  <h3>{category}</h3>
                  <ArrowRight size={20} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-gray">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">POPULAR COURSES</span>
                <h2>Innovative Paths to Knowledge</h2>
                <p>
                  Start learning with courses created for practical,
                  real-world skills.
                </p>
              </div>

              <Link to="/search" className="text-link">
                View More <ArrowRight size={17} />
              </Link>
            </div>

            <div className="course-grid">
              {courses.slice(0, 4).map((course) => (
                <CourseCard course={course} key={course.id} />
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div>
              <span className="eyebrow">START TODAY</span>
              <h2>Discover Your Passion, Build Your Skills</h2>
              <p>
                Join ByteSpace and start exploring hundreds of learning
                opportunities.
              </p>
            </div>

            <Link to="/register" className="button button-lime">
              Get started
              <Play size={17} fill="currentColor" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}