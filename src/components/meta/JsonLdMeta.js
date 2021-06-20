import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../configs/main";
import { formatISO } from "date-fns";
import Head from "next/head";


export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  image,
  description,
}) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords ? undefined : keywords.join(","),
          datePublished: formatISO(date),
          author: author,
          image: image,
          description: description,
        })}
      />
    </Head>
  );
}
