import React from "react";
import { Link, NavLink, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { courses } from "./data/courses.js";
import "./App.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Fieldnotes home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>fieldnotes<span className="brand-period">.</span></span>
        </Link>
        <nav className="main-nav" aria-label="Course categories">
          <NavLink to="/category/Beginner" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Beginner</NavLink>
          <NavLink to="/category/Intermediate" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Intermediate</NavLink>
        </nav>
        <span className="header-note">A little progress, every day.</span>
      </div>
    </header>
  );
}

function CourseCard({ course, index }) {
  return (
    <Link className="course-card" to={`/courses/${course.slug}`}>
      <div className="card-topline">
        <span className={`category-tag ${course.category.toLowerCase()}`}>{course.category}</span>
        <span className="card-index">0{index + 1}</span>
      </div>
      <h3>{course.title}</h3>
      <div className="card-bottom">
        <span className="duration"><span aria-hidden="true">◷</span>{course.duration}</span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>
    </Link>
  );
}

function CourseGrid({ items }) {
  if (!items.length) {
    return <div className="empty-state"><span className="empty-icon">✳</span><h2>No courses here yet</h2><p>Try another category or browse the full catalog.</p><Link className="text-link" to="/">View all courses <span aria-hidden="true">→</span></Link></div>;
  }
  return <div className="course-grid">{items.map((course, index) => <CourseCard key={course.id} course={course} index={index} />)}</div>;
}

function HomePage() {
  return (
    <main>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> TECHYJAUNT · COHORT 8</p>
          <h1>Make room<br />to <em>grow.</em></h1>
          <p className="hero-description">A thoughtful collection of frontend courses, from your first lines of HTML to confident React patterns.</p>
          <a className="hero-link" href="#catalog">Explore the catalog <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of a growing plant" role="img">
          <div className="sun-disc" /><div className="art-ring ring-one" /><div className="art-ring ring-two" />
          <div className="plant-stem" /><div className="leaf leaf-left" /><div className="leaf leaf-right" />
          <div className="plant-pot" /><span className="art-caption">LEARN BY DOING · 2026</span>
        </div>
      </section>
      <section className="catalog page-width" id="catalog">
        <div className="section-heading"><div><p className="eyebrow">THE COLLECTION</p><h2>Courses to explore</h2></div><span className="course-count">{courses.length} courses <span aria-hidden="true">↘</span></span></div>
        <CourseGrid items={courses} />
      </section>
    </main>
  );
}

function CategoryPage() {
  const { category } = useParams();
  const label = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  const matchingCourses = courses.filter((course) => course.category.toLowerCase() === category.toLowerCase());
  return (
    <main className="page-width listing-page">
      <p className="eyebrow"><span className="eyebrow-dot" /> LEARNING PATH</p>
      <div className="section-heading category-heading"><div><h1>{label} <em>Courses</em></h1><p className="listing-intro">A handpicked path for your next step in frontend development.</p></div><span className="course-count">{matchingCourses.length} courses <span aria-hidden="true">↘</span></span></div>
      <CourseGrid items={matchingCourses} />
    </main>
  );
}

function CourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <main className="page-width not-found">
        <div className="not-found-number">404</div>
        <p className="eyebrow">WRONG TURN?</p>
        <h1>Course not found</h1>
        <p>We couldn’t find a course for “{slug}”. It may have moved, or the link may be mistyped.</p>
        <Link className="primary-link" to="/">Back to all courses <span aria-hidden="true">→</span></Link>
      </main>
    );
  }

  return (
    <main className="page-width detail-page">
      <button className="back-button" onClick={() => navigate(-1)}><span aria-hidden="true">←</span> Go back</button>
      <div className="detail-layout">
        <article className="detail-main">
          <p className="eyebrow"><span className={`category-tag ${course.category.toLowerCase()}`}>{course.category}</span> COURSE NOTES</p>
          <h1>{course.title}</h1>
          <p className="detail-duration"><span aria-hidden="true">◷</span> {course.duration}</p>
          <p className="detail-description">{course.description}</p>
          <section className="topics-section">
            <p className="eyebrow">INSIDE THE COURSE</p>
            <h2>What you’ll learn</h2>
            <ol className="topic-list">{course.topics.map((topic, index) => <li key={`${topic}-${index}`}><span className="topic-number">{String(index + 1).padStart(2, "0")}</span><span>{topic}</span><span className="topic-check" aria-hidden="true">✓</span></li>)}</ol>
          </section>
        </article>
        <aside className="detail-aside"><span className="aside-spark" aria-hidden="true">✳</span><p className="eyebrow">A NOTE TO SELF</p><p>Small steps add up. Set aside a little time, follow your curiosity, and keep building.</p><Link to={`/category/${course.category}`} className="text-link">More {course.category.toLowerCase()} courses <span aria-hidden="true">→</span></Link></aside>
      </div>
    </main>
  );
}

function NotFoundPage() {
  return <main className="page-width not-found"><div className="not-found-number">404</div><p className="eyebrow">OFF THE MAP</p><h1>Page not found</h1><p>That page isn’t in this catalog.</p><Link className="primary-link" to="/">Back to all courses <span aria-hidden="true">→</span></Link></main>;
}

export default function App() {
  return <><Navbar /><Routes><Route path="/" element={<HomePage />} /><Route path="/courses/:slug" element={<CourseDetailPage />} /><Route path="/category/:category" element={<CategoryPage />} /><Route path="*" element={<NotFoundPage />} /></Routes><footer className="site-footer"><div className="page-width footer-inner"><Link className="brand" to="/"><span className="brand-mark" aria-hidden="true">F</span><span>fieldnotes<span className="brand-period">.</span></span></Link><span>Made for curious minds.</span></div></footer></>;
}
