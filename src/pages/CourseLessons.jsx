import { CheckCircle, PlayCircle, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import { courses, curriculum } from "../data/courses";

export default function CourseLessons() {
  const { id } = useParams();

  const course = courses.find((item) => item.id === id) || courses[0];

  return (
    <>
      <Header />

      <main className="lesson-page">
        <div className="container">
          <Link to={`/course/${course.id}`} className="back-link">
            <ArrowLeft size={17} />
            Back to course
          </Link>

          <div className="lesson-layout">
            <section className="lesson-main">
              <div className="video-box">
                <img src={course.image} alt={course.title} />
                <div className="video-overlay">
                  <button className="play-button">
                    <PlayCircle size={48} />
                  </button>
                </div>
              </div>

              <div className="lesson-info">
                <span className="eyebrow">{course.category}</span>
                <h1>Introduction to the Course</h1>
                <p>
                  Welcome to this lesson. Follow the course curriculum and
                  complete each section at your own pace.
                </p>
              </div>
            </section>

            <aside className="lesson-sidebar">
              <div className="progress-head">
                <strong>Your progress</strong>
                <span>55%</span>
              </div>

              <div className="progress">
                <span style={{ width: "55%" }} />
              </div>

              <div className="lesson-list">
                {curriculum.map((item, index) => (
                  <div
                    className={
                      index === 0
                        ? "lesson-item current"
                        : "lesson-item"
                    }
                    key={item}
                  >
                    <span className="lesson-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <strong>{item}</strong>
                      <small>Lesson {index + 1}</small>
                    </div>

                    {index === 0 && <CheckCircle size={18} />}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}