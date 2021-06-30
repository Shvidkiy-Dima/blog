import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import TagPostList from "../../components/TagPostList";
import axios from 'axios'
import config from '../../configs/api.json'


export default function Index({ posts, tag, pagination, page }) {
  const url = `/tags/${tag.slug}`;
  const title = tag.title;
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <TagPostList posts={posts} tag={tag} pagination={pagination} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const tag_slug = params.tag
  const tag = (await axios.get(`${config.base_url}/api/post/tag/${tag_slug}/`)).data
  const posts = (await axios.get(`${config.base_url}/api/post/?tag=${tag_slug}`)).data
  return {
    props: {
        tag, 
        posts,
    },
    revalidate: 60
  };
};

export async function getStaticPaths(){
  const tags = (await axios.get(`${config.base_url}/api/post/tag/`)).data
  const paths = tags.map((tag) => ({
    params: { tag: tag.slug},
  }))
  return {
    paths: paths,
    fallback: 'blocking',
  };
};
