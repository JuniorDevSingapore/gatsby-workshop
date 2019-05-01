---
date: 2019-04-27
title: "How I Wish to Build My Blog"
description: "Preface to the Gatsby workshop."
author: Wei Gao
category: blog
tags:
  - gatsby
cover: ""
coverVisit: ""
coverCredit: ""
coverCreditProfile: ""
---

I am a React developer, and I am a fan of Dan Abramov’s. In December of last year, he created a new blog site called overreacted.io 😲 I really love the theme and the typography he chooses just personally. And he also has those coffee indicators for how long it might take to read.

![](https://paper-attachments.dropbox.com/s_D868646FF5F6259E77AA1E30A5572F7458364F74400CAAA550E7EB382CEDCF0C_1553616065719_first-posts.png)

And as a thought leader of our industry, he also suggests that we keep a blog to catalog our thoughts.

`oembed: https://twitter.com/dan_abramov/status/1079214023881707520`

When talking about why he switched from Medium to Gatsby, Dan mentioned:

> I like to have full control over the experience. [— Dan Abramov’s post: Why My New Blog Isn’t on Medium](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae)

And if you’ve been checking in at his blog site every now and then, you might have noticed a couple of things: First, the posts have become longer. And consequently, the coffee indicators for read time can be scary: ☕️☕️☕️☕️☕️☕️☕️☕️☕️☕️???

![](https://paper-attachments.dropbox.com/s_EDEA1480BFE80DDB33F3C220CBA822718701B9FEF8635569A4F84A2DC57290DF_1556357066827_image.png)

He added a variation for the read time indicators. When there are more than 5 cups of coffee, it is converted to 🍱 time! Wins 🎉

    export function formatReadingTime(minutes) {
      let cups = Math.round(minutes / 5);
      let bowls = 0;
      if (cups > 5) {
        return `${new Array(Math.round(cups / Math.E))
          .fill('🍱')
          .join('')} ${minutes} min read`;
      } else {
        return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
      }
    }

Now, I’d like to say that _that_ is how I want to build my blog. I want it to represent my mind, my technical skills, and my taste.

If you are a React developer, then you have a great edge. Since you write professional level React components in your day job, you enjoy the highest level of expressiveness of what you can build on your Gatsby sites.

Even if you are not, the simplicity to get started building your site with Gatsby makes it a great chance for you to get familiar with React.

Let’s dive in.

## References

- [Overreacted](https://overreacted.io)
- [Why My New Blog Isn’t on Medium](https://medium.com/@dan_abramov/why-my-new-blog-isnt-on-medium-3b280282fbae)
- [Making Website Building Fun](https://www.gatsbyjs.org/blog/2017-10-16-making-website-building-fun/) Gatsby embraces simplicity, which makes building your website both fun and meaningful
