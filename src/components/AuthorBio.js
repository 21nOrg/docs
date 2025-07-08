import React from "react";
import Link from "@docusaurus/Link";

const AuthorBio = ({ author, showDescription = true, size = "normal" }) => {
  const avatarSize =
    size === "large" ? "80px" : size === "small" ? "32px" : "48px";
  return (
    <div className="blog-author-bio">
      <div className="avatar" style={{ marginBottom: "0.5rem" }}>
        <img
          className="avatar__photo"
          src={author.imageURL}
          alt={author.name}
          style={{
            width: avatarSize,
            height: avatarSize,
          }}
        />
        <div className="avatar__intro">
          <div className="avatar__name">{author.name}</div>
          <div className="avatar__subtitle">{author.title}</div>
        </div>
      </div>

      {showDescription && author.description && (
        <p
          style={{
            marginBottom: "1rem",
            fontStyle: "italic",
            color: "var(--ifm-color-emphasis-700)",
          }}
        >
          {author.description}
        </p>
      )}

      {author.socials && (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {author.socials.x && (
            <Link
              to={author.socials.x}
              className="button button--primary button--outline button--sm"
            >
              X
            </Link>
          )}
          {author.socials.github && (
            <Link
              to={author.socials.github}
              className="button button--primary button--outline button--sm"
            >
              GitHub
            </Link>
          )}
          {author.socials.linkedin && (
            <Link
              to={author.socials.linkedin}
              className="button button--primary button--outline button--sm"
            >
              LinkedIn
            </Link>
          )}
          {author.socials.website && (
            <Link
              to={author.socials.website}
              className="button button--primary button--outline button--sm"
            >
              Website
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthorBio;
