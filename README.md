This repo contains a sample site built for a Gatsby workshop, README and links to materials we prepared for this workshop.

Held in:

- [Developer's Gym](https://www.meetup.com/Junior-Developers-Singapore/events/260595440/) of [JuniorDev.SG](http://juniordev.sg/)

## Up and running

```shell
$ git clone git@github.com:JuniorDevSingapore/gatsby-workshop.git
$ yarn
$ yarn dev
```

Alternatively,

```shell
$ git clone git@github.com:JuniorDevSingapore/gatsby-workshop.git
$ npm install
$ npm run develop
```

## Workshop content

### Design intention

The audience of our workshop is mainly _junior developers_ (see reference above). The workshop does not assume extensive knowledge about React nor GraphQL. We hope to get people's hands on starting to their blog site.

The design intention is to lead by task instead of by chapters of Gatsby's official documentation. For example, "build a blog site", "add a night theme toggle to my blog", "introduce time to read to my blog posts", "load static asset with GraphQL", etc. Although eventually a lot of the flow align.

We hope to build each chunk of the material in forms of lightning talks. Then we'd pause, check everyone's progress, and move on to the next. Each chunk shall be self-inclusive.

### Materials

The whole slides and workshop content are composed and revised in public. You may view the slides, press S for speaker notes. However, later on I put more of the notes in the following Dropbox Paper files.

_This section is a serious work in progress._

- [Slides](https://speak.wgao19.cc/slides/1904-gatsby-developers-gym/)
- Preparation materials
  - [Preface](./docs/0-preface.md) This one is rather personal, but you may use it anyway
  - [Introduction](https://paper.dropbox.com/doc/1-Intro-lKrNqMpV6PTg3nkfxM54K) Covers what is Gatsby, static site generators, JAMStack concept, Gatsby Starters, Gatsby Plugins, and a peak into Gatsby Themes.
  - [Up and Running](https://paper.dropbox.com/doc/2-Up-and-Running-oLi0QWOcOZWE4oFDfZaO3) Setting up environment, get site running with Gatsby Advanced Starter. Introduces Gatsby CLI, Gatsby Config, Gatsby Node APIs.
  - [Layouts](https://paper.dropbox.com/doc/3-Layouts-BEGMcrHWBK2gWH2yXKOHT) Writing and using a Layout. Introduces React's mindset if people are not familiar.
    - Organization of src/
    - Building layouts with React
  - [Queries](https://paper.dropbox.com/doc/5-Source-Plugins-Querying-Data--Ab2fVQd~_Ie8YArFDfchk2tNAg-ForaftoXNcolI1GJT7qCR) Introduces GraphQL, how Gatsby handles queries for data and static assets.
    - Intro to GraphQL
    - Customizing queries
    - Querying static assets, optimization by Gatsby with Sharp
    - (Optional) Adding a util field for posts
  - [Styling](https://paper.dropbox.com/doc/6-Styling-EsJA2ivqkXpQK1nAnIpbj) Go over choices of styling. But for this workshop we use SASS with CSS modules.
    - Options for styling
    - Styling with SASS and CSS Modules
    - Basic typesetting for the site
    - Building a night theme
    - (Optional) Building the night theme with React hooks
  - Typography (shared link as above) Introduces styling the site using a TypographyJS theme and customizing it.
    - Using a TypographyJS theme
    - Customizing the TypographyJS theme
    - (Optional) Writing your own TypographyJS theme
    - (Optional) Vertical rhythm
  - [APIs](https://paper.dropbox.com/doc/7-Plugging-In-Third-Party-Services--Ab3uzISdkbt3IL5uKNbVg2b2Ag-4m0smdgjiMo2ds4HleEFR) Introduces a few third party libraries.
    - OEMBED
  - [Reaches](https://paper.dropbox.com/doc/8-Reaches--Ab1A0DzsH_I6go1RBBS~oLgDAg-TPVbRpQw4Wzc3RnwntnEx) Materials (reference) and demos about reaching audience
    - SEO
    - Google Analytics
    - Deployment with Netlify
  - [Community](https://paper.dropbox.com/doc/9-Beyond-uS1naclfctO26V0ICpwyE) Refer people to communities and future contributions
    - Where to get help
    - Encouraging people to contribute
    - Pair programming
- List of extra things remember to do
  - Demo the site we created, introduce people to more possibilities

## Contributing

Contributions to this repo are welcome and much appreciated!
