import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="course-card"
    >
      <div className="course-card-image">

        {course.image ? (
          <img
            src={course.image}
            alt={course.title}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(135deg, #ddd, #888)",
            }}
          />
        )}

        <div className="course-badges">
          <span className="course-badge">
            {course.lessons || "17 Lessons"}
          </span>

          <span className="course-badge">
            {course.rating || "4.5"} ★
          </span>
        </div>
      </div>

      <div className="course-card-body">

        <h3 className="course-card-title">
          {course.title}
        </h3>

        <div className="course-card-meta">
          <span>
            by {course.creator || "PurePearl Studio"}
          </span>

          <span>
            {course.rating || "4.5"} ★
          </span>
        </div>

        <div className="course-card-price">
          {course.price || "$25"}
        </div>
      </div>
    </Link>
  );
}