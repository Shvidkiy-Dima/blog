import { GetStaticProps } from "next";
import React from 'react'
import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import PostList from "../../components/PostList";
import config from "../../configs/api.json";
// import { listTags, TagContent } from "../../lib/tags";
import Head from "next/head";
import axios from "axios";


export default function Index({ posts, tags}) {
  const url = "/posts";
  const title = "All posts";

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = (await axios.get(`${config.base_url}/api/post/`)).data
  const tags = (await axios.get(`${config.base_url}/api/post/tag/`)).data

  return {
    props: {
      posts,
      tags,
    },
    revalidate: 60
  };
};
