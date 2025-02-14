---
title: Typed
sidebar_label: Typed
---
<!-- # Typed Collections

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

Typed collections are ideal when you need to maintain consistency across a set of related notes and want to enable powerful filtering and sorting capabilities.  -->


# Typed

Typed collection gives the ability to collect homogenous information with certain common attributes.

Ex: People, Bookmarks, Movies, Books, Wander list, Bucket list, Product Ideas, Content ideas, Quotes, Recipes etc


:::tip

Assign singular name in settings for typed collections if you create a capture shortcut.

:::

## Properties

Property as the name suggests is a mechanism to add additional information for the nodes. As an alternative, we can add all the information in text format on our markdown. But, properties makes capturing this additional information and later visualizing it much better when compared to full text based information.

Example:

I can capture my recipe experiments in Recipes collection. I can choose to give rating or add date in markdown itself. Or I can choose to create properties like rating, date, ingredients etc.

Using properties will unlock possibilities like quickly capturing rating or date from mobile when I add my new recipe entry or later visualize my recipe experiments on a nice Calendar heat map etc.

## Property types

| Property type            | Description                                                      | Configuration options        |
|:-------------------------|:-----------------------------------------------------------------|:------------------------------|
| Text                     | To capture simple text information                               | -                             |
| Single select            | select from predefined options                                   | 1. Default value 2. Grouping 3. Option color  |
| Multi select             | multi select from predefined options                             | 1. Default value(s) 2. Grouping 3. Option color |
| Number                   | to add numerical information                                     | Default value                 |
| Rating                   | To quickly add a value in a given scale of range                 | 1. Rating avatar 2. Color     |
| Checkbox                 | To add true or false kind of information                         | Default value                 |
| Email                    | To add email address - checks for validity of the email address  | -                             |
| Link                     | To add a web address                                             | -                             |
| Time tracking            | To track time and have aggregate associated to it                | Sync with Pointron            |


## Property categories

| Category of property     | Description                                                      |
|:-------------------------|:-----------------------------------------------------------------|
| Normal    | Normal property types - requires user to set defaults and input values                             | 
| Automatic | The property values will be automatically populated from the metadata. Ex: created time, updated time, location etc * Values cannot be edited by the user.| 
| Universal | Similar to normal category but the property options are pre populated by Memotron so that user doesn’t have to do all that work. * Options cannot be edited.| 

:::tip

Use ```Universal``` properties to quickly create properties without the need to worry about creating select options etc.

Ex: Country, Currency, Language, Movie,

:::

## Extending a type

-To be updated-

*Updated on January 11, 2025, 3:48 AM UTC*