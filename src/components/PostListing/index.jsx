import React from "react";
import { Link } from "gatsby";
import s from "./s.module.scss";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div className={s.post}>
            <h2>
              <Link to={post.path} key={post.title}>
                {post.title}
              </Link>
            </h2>
            <p>
              {post.excerpt}
              <Link className={s.read} to={post.path}>
                Read ⟶
              </Link>
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;
