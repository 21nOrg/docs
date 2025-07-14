import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import BlogPostCard from "./BlogPostCard";

function BlogListPageMetadata(props) {
  const { metadata } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const {
    blogDescription,
    blogTitle,
    permalink,
    // For author pages, we might have different fields
    description,
  } = metadata || {};
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle || siteTitle;
  // Use blogDescription if available, otherwise fall back to description or a default
  const metaDescription = blogDescription || description || "Latest blog posts";
  return (
    <>
      <PageMetadata title={title} description={metaDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props) {
  const { metadata, items, sidebar } = props;

  // Check if pagination metadata is available
  const hasPagination =
    metadata &&
    (metadata.previousPage !== undefined || metadata.nextPage !== undefined);

  return (
    <BlogLayout sidebar={sidebar}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--12">
            <div className="custom-blog-list-container">
              {items.map(({ content: BlogPostContent }) => (
                <BlogPostCard
                  key={BlogPostContent.metadata.permalink}
                  post={BlogPostContent}
                />
              ))}
              {hasPagination && <BlogListPaginator metadata={metadata} />}
            </div>
          </main>
        </div>
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
