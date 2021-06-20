import { parseISO } from 'date-fns';
import PostLayout from "../../components/PostLayout";

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import a11yEmoji from '@fec/remark-a11y-emoji';
import emoji from 'remark-emoji';
import InstagramEmbed from "react-instagram-embed";
import YouTube from "react-youtube";
import axios from "axios";
import matter from 'gray-matter'


const components = { InstagramEmbed, YouTube};


export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = "",
  source,
}) {
  return (

    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
    >
            <MDXRemote {...source} components={components} />
    </PostLayout>

  )
}

export async function getStaticPaths () {
  // const paths = fetchPostContent().map(it => "/posts/" + it.slug);

  const posts = (await axios.get(`http://localhost:8000/api/post/`)).data
  const paths = posts.map((post) => ({
    params: { post: post.slug },
  }))
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps ({ params }) {
  const slug = params.post;
  const post = (await axios.get(`http://localhost:8000/api/post/${slug}/`)).data
  const { content, data } = matter(post.content2)
  const mdxSource = await serialize(content, 
    { scope: data,
      mdxOptions: {
        remarkPlugins: [[a11yEmoji, {}], [emoji, {}]],
      },
  
  })

  return {
    props: {
      title: post.title,
      dateString: post.created,
      slug: post.slug,
      description: "",
      tags: post.tags,
      source: mdxSource
    },
  };
};

