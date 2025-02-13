---
title: Best practices 
sidebar_label: Best practices
---

When to use what?

As with any tools that has a lot of features, Memotron if not used efficiently can become hard to maintain and anti productive. In this guide, we will dive deeper into some common patterns and questions that might arise while you use Memotron.

### Simple vs Typed Collections

As you start using collections, the first question that you might get is when to use typed collections. As a general rule of thumb, in situations when you are not sure, start with a simple collection and when the need arise to capture additional information as properties, convert the collection to typed. ```Convert to Typed``` option is present in context menu from collection page.

### Node links vs Collections
Anything that we can collect in a collection can also be collected by simply linking those items to a node and accessing all those items via Node links panel or Node bird view. With the upcoming versions of the app, the difference between node links and collections will be blurred. Therefore you don’t have to worry on which pattern you are using. Just go with your intuition for this question.

:::tip
If you choose to collect information using linking, make use of link tags to add additional relationship information like status, relevancy etc.
:::

### Collections vs Combinations
Combinations as intended in our NCCL system design are meant to be used for high level organization. When a situation arises where you are accessing a group of resources together i.e. a combination of nodes or collections, then that’s a great starting place for creating combinations.

**Examples**

1. Combination: School

    1. Class notes: collection - with semester, subject etc as properties

    2. Assignments: collection

    3. Projects: sub combinations

    4. Each assignment or project linked with further research nodes or collections

2. Combination: Youtube production

    1. Ideas collection

    2. Scripts

    3. Research

3. Combination: Product documentation

### Properties vs Collections

Whether to create separate collections for different types of items or create a single collection with a ```select property``` to differentiate items.

Examples:

1. Person, Digital creator, Indie dev etc - typed collections with extension vs select property

2. Productivity apps, Business tools collection etc - vs Single ```Apps``` collection with a property named category.

A good rule of thumb for this question is to ask whether creating a single collection with a ```select property``` caters our need in the long run or not. That is, is there a possibility that different sets of items in that collection will have different set of properties? If yes, it would be a good candidate for multi collection with type extension.

### Markdown vs Side nav Combination

Start with a markdown if the scope of writing work is small to medium. Start with a combination, if the scope of work is large like writing a book, thesis or product documentation etc.

*Updated on January 11, 2025, 3:48 AM UTC*