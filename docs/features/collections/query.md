---
sidebar_position: 3
---

# Query Collections

Query collections allow you to save frequently used search queries as dynamic collections. These collections automatically update as new content matching the query is added to your knowledge base.

## Benefits

- Dynamic content updates
- Automated organization
- Cross-collection searching
- Advanced query capabilities

## Creating a Query Collection

1. Perform a search in Memotron
2. Click "Save as Collection"
3. Name your query collection
4. Customize query parameters (optional)

## Query Syntax

```sql
-- Basic query example
tag:#programming AND (content:"python" OR content:"javascript")

-- Date-based query
created:>2024-01-01 AND tag:#project

-- Complex query
(tag:#book OR tag:#article) AND rating:>=4 AND NOT archived:true
```

## Use Cases

- Track ongoing projects
- Monitor specific topics
- Create smart filters
- Automate content organization

Query collections are perfect for users who want to maintain automatically updated views of their content based on specific criteria. 