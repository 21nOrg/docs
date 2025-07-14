import React from "react";
import Link from "@docusaurus/Link";

export default function BlogPostCard({ post }) {
  const {
    metadata: { permalink, title, date, description, authors, readingTime },
  } = post;

  const authorNames =
    authors && authors.length > 0
      ? authors.map((author) => author.name).join(", ")
      : "Unknown Author";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const handleCardClick = (e) => {
    if (e.target.tagName === "A" || e.target.closest("a")) {
      return;
    }
    window.location.href = permalink;
  };

  return (
    <article
      className="blog-card-clickable"
      onClick={handleCardClick}
      style={{
        cursor: "pointer",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    >
      <header>
        <h2>
          <Link to={permalink} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>

        <div className="blog-meta">
          {formattedDate && (
            <time dateTime={date} itemProp="datePublished">
              {formattedDate}
            </time>
          )}
          {authorNames && (
            <>
              <span> • by {authorNames}</span>
            </>
          )}
          {readingTime && (
            <>
              <span> • {Math.ceil(readingTime)} min read</span>
            </>
          )}
        </div>
      </header>

      {description && (
        <section className="blog-description">
          <p itemProp="description">{description}</p>
        </section>
      )}

      <footer>
        <Link to={permalink} aria-label={`Read more about ${title}`}>
          Read →
        </Link>
      </footer>
    </article>
  );
}
