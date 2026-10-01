import {
  Check,
  Clock,
  PlayCircle,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { courses, curriculum } from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === id) || courses[0];

  return (
    <>
      <Header />

      <main>
        <section className="course-detail-hero">
          <div className="container detail-grid">
            <div>
              <span className="eyebrow lime">{course.category}</span>

              <h1>{course.title}</h1>

              <p className="detail-description">{course.description}</p>

              <div className="detail-stats">
                <span>
                  <Star size={17} fill="currentColor" />
                  {course.rating}
                </span>

                <span>
                  <Users size={17} />
                  {course.students} students
                </span>

                <span>
                  <PlayCircle size={17} />
                  {course.lessons} lessons
                </span>
              </div>

              <div className="creator-mini">
                <div className="avatar">PS</div>
                <div>
                  <small>Created by</small>
                  <strong>{course.creator}</strong>
                </div>
              </div>
            </div>

            <div className="course-buy-card">
              <img src={course.image} alt={course.title} />

              <div className="buy-card-content">
                <div className="price">{course.price}</div>

                <Link
                  to={`/course/${course.id}/lessons`}
                  className="button button-blue full"
                >
                  Start course
                  <ArrowRight size={18} />
                </Link>

                <p>Full lifetime access</p>

                <ul>
                  <li>
                    <Check size={17} /> {course.lessons} lessons
                  </li>
                  <li>
                    <Check size={17} /> Practical projects
                  </li>
                  <li>
                    <Check size={17} /> Certificate of completion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container content-narrow">
            <span className="eyebrow">CURRICULUM</span>
            <h2>What you'll learn</h2>

            <div className="curriculum">
              {curriculum.map((item, index) => (
                <div className="curriculum-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                  <Clock size={18} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}