---
date: 2019-04-30
title: "Wrap Up Gatsby Workshop"
description: "Wrapping it up"
author: Wei Gao
category: blog
tags:
  - gatsby
cover: https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80
coverVisit: https://unsplash.com/photos/aOC7TSLb1o8
coverCredit: Lauren Mancke
coverCreditProfile: https://unsplash.com/@laurenmancke
---

Hello my fellow junior developers!!

Last Saturday, this happened:

`oembed: https://twitter.com/JuniorDevSG/status/1121997068678000641`

If you missed it, too bad 🙉 And so we're here again to make it less bad. Here's a bit of wrap up of what we did in the workshop.

In this recap, we'll share more about the imperative knowledge as well as pulling a bunch of resources together so you can refer back to where you'd like to go for your next step.

## What is Gatsby

Gatsby is a static site generator based on React and GraphQL. Both libraries bring their elements (?) into Gatsby that comprise of Gatsby's unique strengths:

It is blazing fast. It follows the PRPL Pattern, automatically optimizes your sites, and it embraces the next billion users.

Its simplicity sparks joy.

And it offers full range of customizability.

We then browsed through the starters library as well as the plugins. Before you jump right in to getting your site up and running, you may check out the following articles that we mentioned during the workshop:

- [Silly Name, Serious Stuff](https://pixelpioneers.co/blog/2019/speaker-spotlight-phil-hawksworth) (intro to a talk that will happen in [Pixel Pioneers](https://pixelpioneers.co/) in June)
- [Creating a Gatsby Theme with John Otander](https://egghead.io/lessons/gatsby-creating-a-gatsby-theme-with-john-otander)
- [PRPL Pattern](https://www.gatsbyjs.org/docs/prpl-pattern/) Explains why Gatsby sites are fast
- [Web Performance 101 — also, why is Gatsby so fast](https://www.gatsbyjs.org/blog/2017-09-13-why-is-gatsby-so-fast/)
- [Gatsbygram Case Study](https://www.gatsbyjs.org/blog/gatsbygram-case-study/)

By the way, if you missed the workshop but would like to have the chance to learn to build Gatsby sites, I recommend that you follow [the tutorial from Gatsby's official doc](https://www.gatsbyjs.org/tutorial/). It'll probably take you a good half day. This set-by-step tutorial is truly a gem that you should not miss. The quality and the completeness of the materials are unmatched.

## Up and running

To use Gatsby, you'd need at least git and Node (>8) installed on your system. Then, you'll need Gatsby CLI installed globally.

The Gatsby CLI provides a set of command line interface that will help you create your site. Check out their docs for more details. For our workshop, we'd use the following extensively:

- `gatsby new` creates your repo from a starter
- `gatsby develop` starts a hot reload dev server that you'll use

So we've installed Gatsby CLI, and we created our first site with `gatsby new`. There is no magic here, it simply clones your repo, copies the necessary files, and initializes the first git commit.

I now have a personal tip — when even your favorite starter still got here and there that don't fit your need, fork it, and make changes to it to make it your own.

We then went ahead try to understand a bit more about what's going on within a Gatsby site. Read `gatsby-config.js` and `gatsby-node.js`, they specify site configuration and site generation, repsectively.

Inside `gatsby-config.js`, you'll likely write a bunch of meta data as well as plugins and their options.

In `gatsby-node.js`, you'd write the Node APIs that control your site generation. Note that you don't _have to_ know how to write everything from scratch for now. Most starters already write those for you. But it's helpful if you understand what they're doing. Plus the existing starters are a good place to learn the good practices of those tasks.

Here is the list of docs we mentioned in this section:

- [Set Up Your Development Environment](https://www.gatsbyjs.org/tutorial/part-zero/)
- [Gatsby CLI](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-cli/README.md)
- [Gatsby Config](https://www.gatsbyjs.org/docs/gatsby-config)
- [Node APIs](https://www.gatsbyjs.org/docs/node-apis/)

And a couple of starters you may want to look at:

- [Gatsby Advanced Starter](https://www.gatsbyjs.org/starters/Vagr9K/gatsby-advanced-starter/)
- [Gatsby Starter Blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)

## Layouts

The front end website of your Gatsby project is simply going to be a React app. This means the layouts, the reusable UI parts, the interface, they all gonna be React components.

They will live in the `src/` directory of your project. A typical file structure of your may look like this:

    $ tree src -L 2
    src
    ├── components
    │   ├── About
    │   ├── Disqus
    │   ├── Footer
    │   ├── PostListing
    │   ├── PostTags
    │   ├── SEO
    │   ├── SocialLinks
    │   ├── UserInfo
    │   └── UserLinks
    ├── favicon.png -> ../static/logos/logo-48.png
    ├── layout
    │   ├── index.css
    │   └── index.jsx
    ├── pages
    │   ├── about.jsx
    │   └── index.jsx
    └── templates
        ├── b16-tomorrow-dark.css
        ├── category.jsx
        ├── post.css
        ├── post.jsx
        └── tag.jsx

Everything under `src/ages/` will become a page. Try creating one on your own. If you're unlucky and named your page to something like `test.jsx`, it won't work because Gatsby filters out a few reserved words and `test` happens to be one of them. You'd only know if you read the docs by yourself.

The next thing we did was to play around with our layout, adding a header and an intro to layout, etc. Even if you are not familiar with React, you'd find yourself writing React components anyway. Maybe it's a good excuse to pick it up yo?

Some further materials you may be interested in:

- [Creating and Modifying Pages](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)
- [Layout components](https://www.gatsbyjs.org/docs/layout-components/)
- [Life After Layouts](https://www.gatsbyjs.org/blog/2018-06-08-life-after-layouts/) talks about how Gatsby initially defaults to have `layout` wrap the whole app, but removed it since v2 to eliminate unnecessary abstraction
- [Automatically create pages from components in any directory](https://www.gatsbyjs.org/blog/2018-07-07-the-gatsby-plugin-page-creator/) the page gen that happens to `src/pages` may happen to other directories as well — but you need a plugin

## Queries, GraphQL, and I should even load my assets with it?!

Our next segments were about GraphQL. This part was led by my co-instructor Nut. I am absolutely in love with him now. He's so amazingly knowledgeable about GraphQL, picks up Gatsby like he's owning it already. Plus he answers all my questions in his unique Thai style softness that just gets me like 🤩 Anyway, that is why this segment will take on a different tone — one more of a student than of a speaker.

Turns out, while GraphQL was born as a query language run on a server, Gatsby's adaptation of it at build time should create a eureka moment for its brilliance. With GraphQL, all my static assets are now infused into a JSON object, split by routes, pre-cached, and easily consumed by my React components.

Furthermore, we get GraphQL's features for free. Predictability, for instance, we'd get a guaranteed shape for most of the data objects in our components now. It's eye-opening to see a hairy problem in one system becomes a non-problem in another.

You may want to check out this article [Why Gatsby Uses GraphQL](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/) for more understanding about Gatsby's choice of GraphQL.

So Nut led us through a brief intro to GraphQL's features. Then he showed us how to play around [GrahiQL](https://github.com/graphql/graphiql), _a graphical interactive in-browser GraphQL IDE_, to help our development process — simply copy over the query in the component and see its return! Then, we dived into our code to learn to [customize GraphQL schema / queries](https://www.gatsbyjs.org/blog/2017-10-01-migrating-my-blog-from-hexo-to-gatsby/#adding-custom-data-to-the-graphql-schema) for our own features.

Another topic we covered was how, together with Gatsby Image, Gatsby Transformer Sharp, and querying with GraphQL, we can have fast, _optimized_, and _responsive_ images in our site. Below is a gif that showcases a stable user interface where images are lazily loaded, hold their spaces, and display a lower resolution version when the network is not that reliable. You may as well want to read this article [Image Processing with gatsby-transformer-sharp](https://image-processing.gatsbyjs.org/) to learn more.

That was a contentful hour. Here's a list for you to dive in more:

- [GraphQL](https://graphql.org/)
- [Querying with GraphQL](https://www.gatsbyjs.org/docs/querying-with-graphql/)
- [Why Gatsby Uses GraphQL](https://www.gatsbyjs.org/docs/why-gatsby-uses-graphql/)
- [Adding custom field](https://www.gatsbyjs.org/blog/2017-10-01-migrating-my-blog-from-hexo-to-gatsby/#adding-custom-data-to-the-graphql-schema)
- [Building a custom, accessible image lightbox](https://www.gatsbyjs.org/blog/2018-11-03-building-an-accessible-lightbox/)
- [Image Processing with gatsby-transformer-sharp](https://image-processing.gatsbyjs.org/)

Some more resources on learning GraphQL:

- [GraphQL on Egghead.io](https://egghead.io/browse/tools/graphql)
- [How to GraphQL](https://www.howtographql.com/)

## Styling

Am I exaggerating by saying us front end developers are overly concerned about styling? For this workshop, we chose a starter that particularly avoids the battle of styling — there is (nearly) no styling to the site at all.

For our workshop today, we styled our site using SASS + CSS Modules. The setup once again involves installing packages and adding them to `plugins` inside `gatsby-config.js`. And you shall see a pattern here. I mean, this kind of consistency also makes it feel a lot easier to work with than having to go all over the places for configurations.

Once our styling is in place, we went ahead to style our components using CSS Modules, and see our class names scoped. If you are not familiar with CSS Modules yet, you're not alone! Most of us weren't entering that workshop neither. Time to try something new 👋

Then, we also talked about how when we may not want to write too much styling at all other than just making sure our site is reader-friendly, we have the choice of using [TypographyJS](http://kyleamathews.github.io/typography.js/) with an existing typography theme. After all, typography is an integral part to most of the text-centered sites.

We were running over time so quite a few of the styling topics were left off. Maybe here is a chance to make up a bit for that:

### Using a style guide

When we add styling to our sites, it is often helpful to build a style guide first. This would be a page that tries to contain all sample cases of your content. For instance, a nice style guide to my blog would be one markdown post that contains all headings, code blocks, lists, block quotes, etc etc. Once you have a style guide, you can simply refer to that as you add styling. This saves a lot of time having to go back to styling once you hit an edge case.

Our beloved CSS master [Huijing](https://chenhuijing.com/about/) has a nice [style guide](https://www.chenhuijing.com/styleguide/) on her website. If your site is mainly markdown posts, you may check out [this gist](https://gist.github.com/wgao19/216b5cea98b2d7f4b61205c68227a63c) for style guide as well. [Here](https://anyhowly.rocks/style-guide) is the style guide in action in the sample site I have been building for this workshop.

### Dark mode

Dark mode is hot. Nearly all apps have a dark mode now. [Overreacted](https://overreacted.io) also has dark mode. There are ways to do this and since I now have the luxury of making references, check out [here](https://github.com/gaearon/overreacted.io/blob/master/src/html.js) or [here](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8). These are the serious ways. What about my personal way of doing it? Maybe you can look [here](https://codepen.io/wgao19/pen/vMzOgQ) 🙈.

Now for a list of references for this segment.

- [Gatsby Plugin Sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [What Are CSS Modules](https://css-tricks.com/css-modules-part-1-need/)
- [Using CSS Modules with Gatsby](https://www.gatsbyjs.org/tutorial/part-two/#css-modules)
- [Create A Dark/Light Mode Switch with CSS Variables](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8)
- [Dark mode on Overreacted](https://github.com/gaearon/overreacted.io/blob/master/src/html.js)
- [Create A Dark/Light Mode Switch with CSS Variables](https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8)

## Reaching

Your site would not be complete until it reaches your audience.

If you are keen on the SEO side of things, you may want to start with this article [Putting SEO First with Gatsby](https://dev.to/wesleylhandy/putting-seo-first-with-gatsby-3n2g). Meanwhile, adding Google Analytics to your site is only [one plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/) plus one `trackingId` away.

And now we finally come to deployment. My hand and mind are not working anymore but since my demo must have left an impression, I'm just gonna throw in [Netlify](https://netlify.com) here and say that thanks to that great product, my first Gatsby site took a mere matter of minutes from start to _deploy_.

- [Putting SEO First with Gatsby](https://dev.to/wesleylhandy/putting-seo-first-with-gatsby-3n2g)
- [Hosting on Netlify](https://www.gatsbyjs.org/docs/hosting-on-netlify/)

## Community

Now we're nearly closing our first ever intro to Gatsby workshop. What's next? _Build your own site_ of course! But I'd like to share with you in order of accessibility of where you can reach out to find a community around Gatsby.

### Local

There is already a nice vibe in our local community around Gatsby.

[Thomas Chia](https://twitter.com/th__chia) gave a talk in Gatsby [Gatsby: Back to the Future!](https://engineers.sg/video/gatsby-back-to-the-future-reactjs-singapore--3255) in Mar 2019 issue of ReactJS Singapore.

In the same event, [Thorsten Schaeff](https://twitter.com/thorwebdev) ran a JAMStack session [Hands-on: building an e-commerce site with Gatsby, Netlify, and Stripe](https://engineers.sg/video/hands-on-building-an-e-commerce-site-with-gatsby-netlify-and-stripe-reactjs-singapore--3254) on using [Stripe](https://stripe.com) with [React Hooks](https://reactjs.org/docs/hooks-intro.html).

And can you believe it, in the same week, Max Ong Zong Bao gave a talk on JAMStack [Building a developer blog through JAM stack](https://engineers.sg/video/building-a-developer-blog-through-jam-stack-junior-developers-singapore--3252) at a [JuniorDev](http://juniordev.sg) meet up.

Furthermore, if you miss our workshop, there will be another one by [swyx](https://twitter.com/swyx) at [JSConf Asia this year](https://2019.jsconf.asia/). And even if you were at this past workshop, you should still go to learn more!

I really really love this vibrant community and I'm sure so do you. [Thomas Chia](https://twitter.com/th__chia) suggested that we should start a community around JAMStack. I mean, why not??? And if that's an idea you like as well, please hop on and let's do it :]

- [Gatsby: Back to the Future!](https://engineers.sg/video/gatsby-back-to-the-future-reactjs-singapore--3255) - ReactJS Singapore
- [Building a developer blog through JAM stack](https://engineers.sg/video/building-a-developer-blog-through-jam-stack-junior-developers-singapore--3252) - Junior Developers Singapore
- [Hands-on: building an e-commerce site with Gatsby, Netlify, and Stripe](https://engineers.sg/video/hands-on-building-an-e-commerce-site-with-gatsby-netlify-and-stripe-reactjs-singapore--3254) - ReactJS Singapore
- [swyx](https://twitter.com/swyx) will be giving a Gatsby workshop at [JSConf Asia this year](https://2019.jsconf.asia/)

### ... and beyond

Beyond the scope of our tropical home, the online community around Gatsby is also incredibly supportive.

The official docs are well written and maintained. Their official tutorial is one you should spend a good afternoon with.

If you've got interesting things to share with @gatsby they'd likely respond to you on twitter.

Gatsby also offers an interesting interactive activities with us, pair programming, where you have the chance to work on a topic of your choice with an expert Gatsby developer. You may want to check out [this article](https://www.gatsbyjs.org/blog/2018-08-11-gatsby-pair-programming/) for someone's pair programming experience with Gatsby.

Once you feel Gatsby is your think, you should [contribute](https://www.gatsbyjs.org/contributing/) to it. Why? Because they [give out free swags for contributors](https://www.gatsbyjs.org/contributing/contributor-swag/). Not just that. Since it's such a lovely community, aren't you excited to join them?

There are a number of more resources you can find in the list below:

- [Official documentation](https://www.gatsbyjs.org/docs/)
- [Official tutorial](https://www.gatsbyjs.org/tutorial/)
- [Official blog](https://www.gatsbyjs.org/blog/) I find reading their blogs from the beginning very helpful in terms of learning and understanding their design implementation as well
- [Twitter @gatsbyjs](https://twitter.com/gatsbyjs)
- [DEV #gatsbyjs](https://dev.to/t/gatsbyjs)
- [Pair Programming](https://www.gatsbyjs.org/contributing/pair-programming/)
- [Discord Gatsby channel](https://gatsby.dev/discord)

Finally finally got to wrap up. It has been a great journey to work on the content for this workshop as well. I really hope you've learned something new. And next time, I hope I'll be hearing from _you_ on things you find inspiring. Please share with us!
