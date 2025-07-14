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
import Link from "@docusaurus/Link";

function TagPostsPageMetadata(props) {
  const { metadata, tag } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();

  const title = tag ? `Posts tagged "${tag.label}" - ${siteTitle}` : siteTitle;
  const description = tag
    ? `${tag.count} post${tag.count !== 1 ? "s" : ""} tagged with "${
        tag.label
      }"${tag.description ? ". " + tag.description : ""}`
    : "Tagged blog posts";

  return (
    <>
      <PageMetadata title={title} description={description} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function TagPostsPageContent(props) {
  const { metadata, items, sidebar, tag } = props;

  return (
    <BlogLayout sidebar={sidebar}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--12">
            {tag && (
              <div style={{ marginBottom: "2rem" }}>
                <h1 style={{ marginBottom: "1rem" }}>
                  {tag.count} post{tag.count !== 1 ? "s" : ""} tagged with "
                  {tag.label}"
                </h1>

                {tag.description && (
                  <p
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--ifm-color-emphasis-700)",
                      marginBottom: "1rem",
                    }}
                  >
                    {tag.description}
                  </p>
                )}

                <Link
                  to="/tags"
                  className="button button--outline button--primary"
                  style={{ marginBottom: "1rem" }}
                >
                  View All Tags
                </Link>
              </div>
            )}

            <div className="custom-blog-list-container">
              {items.length > 0 ? (
                items.map(({ content: BlogPostContent }) => (
                  <BlogPostCard
                    key={BlogPostContent.metadata.permalink}
                    post={BlogPostContent}
                  />
                ))
              ) : (
                <p>No posts found for this tag.</p>
              )}
            </div>
          </main>
        </div>
      </div>
    </BlogLayout>
  );
}

export default function CustomTagPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <TagPostsPageMetadata {...props} />
      <TagPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
