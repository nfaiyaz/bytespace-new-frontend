import { Link } from "react-router-dom";
import { Star, ArrowUpRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <Link to={`/course/${course.id}`} className="course-image-wrap">
        <img src={course.image} alt={course.title} className="course-image" />
        <span className="course-category">{course.category}</span>
      </Link>

      <div className="course-content">
        <div className="course-meta">
          <span>{course.creator}</span>
          <span className="rating">
            <Star size={15} fill="currentColor" />
            {course.rating}
          </span>
        </div>

        <Link to={`/course/${course.id}`}>
          <h3>{course.title}</h3>
        </Link>

        <p>{course.description}</p>

        <div className="course-bottom">
          <strong>{course.price}</strong>

          <Link to={`/course/${course.id}`} className="arrow-link">
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}