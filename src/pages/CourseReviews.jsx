import { Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { courses, reviews } from "../data/courses";

export default function CourseReviews() {
  const { id } = useParams();
  const course = courses.find((item) => item.id === id) || courses[0];

  return (
    <>
      <Header />

      <main>
        <section className="page-hero small">
          <div className="container">
            <span className="eyebrow">REVIEWS</span>
            <h1>What Learners Are Saying</h1>
            <p>{course.title}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="review-summary">
              <strong>4.8</strong>
              <div>
                <div className="stars">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
                <span>Based on 240 reviews</span>
              </div>
            </div>

            <div className="review-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.name}>
                  <div className="review-top">
                    <div className="avatar">
                      {review.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <div>
                      <strong>{review.name}</strong>

                      <div className="stars small">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Star
                              size={14}
                              fill="currentColor"
                              key={index}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <p>{review.text}</p>
                </article>
              ))}
            </div>

            <div className="center-button">
              <Link to={`/course/${course.id}`} className="button button-dark">
                Back to course
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}