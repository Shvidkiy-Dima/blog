import Head from "next/head";
import config from "../../configs/main";


export default function BasicMeta({
  title,
  description,
  keywords,
  author,
  url,
}) {
  return (
    <Head>
      <title>
        {title ? title : config.site_title}
      </title>
      <meta
        name="description"
        content={description ? description : config.site_description}
      />
      <meta
        name="keywords"
        content={
          keywords
            ? keywords.join(",")
            : config.site_keywords.map((it) => it.keyword).join(",")
        }
      />
      <meta name="author" content={config.author} />
      <link rel="canonical" href={config.base_url + url} />
    </Head>
  );
}
