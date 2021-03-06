import React from "react";
import _ from "lodash";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import UserInfo from "../../components/UserInfo";
import PostTags from "../../components/PostTags";
import SocialLinks from "../../components/SocialLinks";
import SEO from "../../components/SEO";
import config from "../../../data/SiteConfig";
import s from "./s.module.scss";

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    const { cover, coverVisit, coverCreditProfile, coverCredit } = post;
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          {!!cover && !!coverCreditProfile && !!coverCredit && (
            <div className={s.coverImage}>
              <img className={s.coverImage} src={cover} />
              <small className={s.coverCredit}>
                {coverVisit ? <a href={coverVisit}>photo</a> : photo}
                {` by `}
                <a href={coverCreditProfile}>{coverCredit}</a>
              </small>
            </div>
          )}
          <div className={s.post}>
            <h1>{post.title}</h1>
            <h3>
              <a href={`/author/${_.kebabCase(post.author.id)}`}>
                {post.author.id}
              </a>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          </div>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date
        category
        tags
        author {
          id
          bio
          twitter
        }
        cover
        coverVisit
        coverCredit
        coverCreditProfile
      }
      fields {
        nextTitle
        nextSlug
        prevTitle
        prevSlug
        slug
        date
      }
    }
  }
`;
