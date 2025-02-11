---
title: Introduction
sidebar_label: Introduction

# Page Metadata
sidebar_position: 2               # Order in sidebar (lower numbers appear first)
sidebar_class_name: green        # Custom CSS class for sidebar item
hide_title: false                # Hide the title at top of doc page
hide_table_of_contents: false    # Hide the table of contents on the right
toc_min_heading_level: 2         # Minimum heading level shown in TOC
toc_max_heading_level: 3         # Maximum heading level shown in TOC

# SEO
description: "Page description"   # Meta description for SEO
keywords: [keywords, for, seo]    # Meta keywords for SEO
image: img/myimage.png           # Social card image

# Navigation
pagination_label: Custom label    # Used in prev/next navigation
# pagination_next: next-doc-id      # Custom next page in pagination
# pagination_prev: prev-doc-id      # Custom previous page in pagination

# Display
hide_sidebar: false                # Hide the sidebar
custom_edit_url: "url"            # Custom edit URL
draft: false                      # Mark as draft (won't be published)
last_update:                      # Last update date info
  date: 2024-01-01
  author: Your Name

# Tags (for blog posts)
tags: [tag1, tag2]
---
# Introduction to Memotron

Docusaurus is a **static-site-generator** (also called **[Jamstack](https://jamstack.org/)**).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
