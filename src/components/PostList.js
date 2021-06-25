import React from "react";
import PostListItems from './PostListItems'
import TagLink from "./TagLink";


export default function PostList({ posts, tags}) {
  return (
    <div className={"container"}>
      <PostListItems posts={posts} />
      <ul className={"categories"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagLink tag={it} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .categories {
          display: none;
        }
        .categories li {
          margin-bottom: 0.75em;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
