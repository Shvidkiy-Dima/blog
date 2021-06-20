import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../configs/main";
// import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";
import axios from "axios";


export default function Index({ posts, tags, pagination }) {
  const url = "/posts";
  const title = "All posts";

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />


      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export async function getStaticProps() {
  //const posts = listPostContent(1, config.posts_per_page);
  //const tags = listTags();

  const posts = (await axios.get('http://localhost:8000/api/post/')).data
  const tags = (await axios.get('http://localhost:8000/api/post/tag/')).data

  const pagination = {
    current: 1,
    pages: Math.ceil(posts.length / config.posts_per_page),
  };

  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
