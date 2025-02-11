---
sidebar_position: 2
---

# Typed Collections

Typed collections are designed to store notes that share common characteristics or properties. They provide a structured way to organize information with consistent attributes across all items in the collection.

## Key Features

- Defined data structure
- Consistent properties across items
- Advanced filtering and sorting
- Template-based note creation

## Creating a Typed Collection

1. Click "+" in the collections panel
2. Choose "Typed Collection"
3. Define your properties:
   - Property name
   - Data type (text, number, date, etc.)
   - Required/Optional

## Example Schema

```json
{
  "Book": {
    "properties": {
      "title": {
        "type": "string",
        "required": true
      },
      "author": {
        "type": "string",
        "required": true
      },
      "publishDate": {
        "type": "date",
        "required": false
      },
      "rating": {
        "type": "number",
        "min": 1,
        "max": 5,
        "required": false
      }
    }
  }
}
```

Typed collections are ideal when you need to maintain consistency across a set of related notes and want to enable powerful filtering and sorting capabilities. 