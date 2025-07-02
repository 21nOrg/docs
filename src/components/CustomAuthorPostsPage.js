import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostCard from "./BlogPostCard";
import AuthorBio from "./AuthorBio";

function AuthorPostsPageMetadata(props) {
  const { metadata, author } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();

  const title = author ? `Posts by ${author.name} - ${siteTitle}` : siteTitle;
  const description = author
    ? `All blog posts by ${author.name}${
        author.title ? `, ${author.title}` : ""
      }`
    : "Author blog posts";

  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function AuthorPostsPageContent(props) {
  const { metadata, items, sidebar, author } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--12">
            {author && <AuthorBio author={author} />}

            <div className="custom-blog-list-container">
              <h2
                style={{
                  marginBottom: "2rem",
                  marginTop: author ? "2rem" : "0",
                }}
              >
                {author ? `Posts by ${author.name}` : "Blog Posts"}
              </h2>

              {items.length > 0 ? (
                items.map(({ content: BlogPostContent }) => (
                  <BlogPostCard
                    key={BlogPostContent.metadata.permalink}
                    post={BlogPostContent}
                  />
                ))
              ) : (
                <p>No posts found for this author.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </BlogLayout>
  );
}

export default function CustomAuthorPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <AuthorPostsPageMetadata {...props} />
      <AuthorPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
