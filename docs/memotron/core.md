---
sidebar_position: 1
sidebar_label: Core concepts
---

<!-- # Core Concepts

Understanding Memotron's core concepts will help you make the most of the application.

## Notes

Notes are the fundamental building blocks in Memotron. Each note can contain text, images, code blocks, and other types of content.

## Collections

[Collections](../features/collections.md) help you organize related notes together. They can be:
- Simple collections
- Typed collections
- Query-based collections

## Links

Links create connections between notes, allowing you to build a network of knowledge. Learn more about [linking](../features/linking.md).

## Tags

Tags provide a flexible way to categorize and filter your notes. They can be used across collections and help in quick retrieval of information.  -->

# Core concepts

Presented below are the details of the underlying method and design decisions that we took to build Memotron to be the best possible memory companion for humans.

After giving much deeper thought and analyzing multitude of digital memory use cases, we have arrived at the below items as broad processes that are involved in digital memory or knowledge management.

1. Capture

2. Curation

3. Retrieval

    1. For synthesis

    2. For reflection / retrospection


### Capture: The elephant in the room

While the definition of capture is very obvious, modern tools marketed as memory or knowledge management solutions often lack robust capturing mechanisms. In fact analog systems are much better in some cases for capturing information efficiently. By efficiency, we mean how frictionless the process of capturing is in every situation and how fast can we capture. After all, capturing involves not just taking notes in a classroom or sitting at our desks in our office, it also involves capturing our fleeting thoughts and ideas while we are driving in a car or taking a stroll on a sidewalk.

### Curation & Retrieval

How we achieve curation can significantly make or break/slow down our digital memory management process. Many of the traditional curation methods can be ineffective and non-scalable. Read this one very useful [article](https://writingcooperative.com/zettelkasten-how-one-german-scholar-was-so-freakishly-productive-997e4e0ca125) written by David B Clear, which describes traditional curation methods and compares it with Zettlekasten method. While Memotron supports Zettlekasten method, it is not limited to it. Read the information architecture section below to understand the capability of what you can do with Memotron.

Retrieval is a side effect of Curation. If we manage to do curation well, retrieval will take care of itself.

---

## NCCL system

> _"Node - Collection - Combination - Linking system."_

If you have read the article mentioned above, you might naturally wonder if NCCL is another note taking method like Zettlekasten. NCCL is a system using which any note taking method can be implemented. So, Zettlekasten or any other note-taking method can be implemented on top of NCCL system. 
<!-- See [Note-taking methods](./method.md) section for more detailed explanation. -->

### Hierarchy

Below items form the hierarchy of information in this system.

1. Node

2. Collection

3. Combination

![alt image](https://cdn.21n.org/memotron/docs/core-concepts-hierarchy.png)

### Node

A Node is the functional unit in this method. It can be a markdown file, an image, a text bookmark, a kindle book highlight etc. It can be as short as a web link to as long as a very long manuscript written as markdown.

### Collection

A collection as the name suggests is a collection of nodes. It can be homogenous or heterogenous. If homogenous, it can have common properties assigned to each node.

Collections are really handy if we want to collect specific types of data together.

Examples:

1. Ideas

2. Bookmarks

3. Watch lists

4. Journals

### Combination

Combination is the highest level of curation which can have any of node, collection or other combinations in it. Combinations are useful to combine frequently accessed items together.

Examples:

1. Projects

2. Subjects

## Linking

### Link to curate, direct linking

Link to curate is the ability to add a new piece of information to the memory destination point without actually visiting the destination. Zettlekasten method’s foundation is based on this principle.

Almost all tools that implement this approach rely on inline mentions for linking. Inline mentions are a nice way to link pieces of information together and have backlinks to go back. But, it is limited in a way that the ability to link is confined to text or markdown. That’s why NCCL system has **direct linking** in combination with mention linking. Direct linking removes the dependency on text and unlocks new possibilities like linking a text clip or web page to a node or collection which you can notice in Memotron web clipper extension.

Link to curate using direct linking also makes it possible to add new items to collections or combinations without visiting the collection or combination page (the destination).

### Nodularity

> Node + granularity

Nodularity is pushing link to curate to next level. It is the ability to link a new piece of information to any part of the node, in this case Markdown. That means, if we have a very long manuscript, we can link the new idea or research information to exact sub heading or section that the information is relevant to.

### Relations
> Previously called as Link tags

Relation is a way to maintain relationships for links. Imagine you have 100 data points for an article that you are writing. Now with relations, you can easily mark few of those data points as ```weight:8``` or ```status:completed``` or ```relation:against``` etc.

*Updated on October 19, 2025*
