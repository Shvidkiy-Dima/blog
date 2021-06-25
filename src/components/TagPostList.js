import React from "react";
import PostItem from "./PostItem";
import PostListItems from './PostListItems'


export default function TagPostList({ posts, tag }) {
  return (
    <div className={"container"}>
      <h1>
        All posts / <span>#{tag.title}</span>
      </h1>
      <PostListItems posts={posts}/>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 1200px;
            width: 100%;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
          }
          h1 {
            margin: 0 0 2rem;
            padding: 0;
            font-weight: 100;
            font-size: 1.75rem;
            color: #9b9b9b;
          }
          h1 span {
            font-weight: bold;
            color: ${tag.font_color}};
          }
          ul {
            margin: 0;
            padding: 0;
            flex: 1 0 auto;
          }
          li {
            list-style: none;
            margin-bottom: 1.5rem;
          }

          @media (min-width: 769px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
}
