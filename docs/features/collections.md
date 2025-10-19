---
title: Collections
sidebar_label: Collections
sidebar_position: 3
---
import Canonical from '@site/src/components/Canonical';

<Canonical path="/features/collections" />

# Collections

Collections are a mechanism to collect items together. Some note-taking methods like Zettelkasten might heavily rely on linking to organize knowledge, other methods requires some structure to organize information.

Collection gives the ability to collect homogenous information with certain common attributes/properties.

Examples: 
Random memes, Cool websites, Thoughts, Ideas, Photography collection, People, Bookmarks, Movies, Books, Wander list, Bucket list, Product ideas, Content ideas, Quotes, Recipes etc



| Collection type | Description |
|----------------|-------------|
| Default | To collect similar type of data together with common characteristics or properties |
| Query | To save a frequently used search query as collection |
| Synced | To sync data from external sources like Github, Linear etc. |


:::note
Simple collection type is no longer supported since v0.62.0.
:::




<!-- :::tip

Assign singular name in settings for typed collections if you create a capture shortcut.

::: -->

## Properties

Property as the name suggests is a mechanism to add additional information for the nodes. The alternative is to add all the information in text format in a markdown. Properties makes capturing this additional information and later visualizing it much better when compared to full text based information.

Example:

Imagine capturing your recipe experiments in Recipes collection. You can choose to give rating or add date in markdown itself. However, you can use properties like rating, date, ingredients etc pre-defined so that you don't have to type in the information every time. Using properties will unlock possibilities like quickly capturing rating or date from mobile when you add your new recipe entry or later visualize your recipe experiments on a nice Calendar heat map etc.

## Property types

| Property type            | Description                                                      | Configuration options        |
|:-------------------------|:-----------------------------------------------------------------|:------------------------------|
| Text                     | To capture simple text information                               | -                             |
| Single select            | Select from predefined options                                   | Grouping, color  |
| Multi select             | Multi select from predefined options                             | Grouping, color |
| Number                   | To add numerical information                                     | -                 |
| Rating                   | To quickly add a value in a given scale of range                 | Avatar, color     |
| Checkbox                 | To add true or false kind of information                         | -                 |
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

Ex: Country, Currency, Language, Mood etc.

:::



*Updated on October 19, 2025* 