import React from 'react'
import { parseISO } from 'date-fns';
import PostLayout from "../../components/PostLayout";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import a11yEmoji from '@fec/remark-a11y-emoji';
import emoji from 'remark-emoji';
import axios from "axios";
import matter from 'gray-matter'
import config from '../../configs/api.json'


export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  source,
  headers,
  seo,
  NotFound
}) {

  if (NotFound){
    return (
      <div>Not found</div>
    )
  }
  return (


    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      headers={headers}
      seo={seo}
    >
            <MDXRemote {...source} />
    </PostLayout>

  )
}

export async function getStaticPaths () {

  const posts = (await axios.get(`${config.base_url}/api/post/`)).data
  const paths = posts.results.map((post) => ({
    params: { post: post.slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps ({ params }) {
  const slug = params.post;
  try {
    let post = (await axios.get(`${config.base_url}/api/post/${slug}/`)).data
    const { content, data } = matter(post.content)
    const mdxSource = await serialize(content, 
      { scope: data,
        mdxOptions: {
          remarkPlugins: [[a11yEmoji, {}], [emoji, {}]],
        },
    })

    let seo = {title: post.seo_title, description: post.seo_description, keywords: post.seo_keywords}

    return {
      props: {
        title: post.title,
        dateString: post.created,
        slug: post.slug,
        tags: post.tags,
        source: mdxSource,
        headers: post.headers,
        seo,
        NotFound: false,
      },
      revalidate: 60*60
    };
  }
  catch (err) {
    return {
      props: {
        NotFound: true,
      },
    }
  }

};

