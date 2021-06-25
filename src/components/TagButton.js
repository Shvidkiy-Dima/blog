import Link from "next/link";
import { TagContent } from "../lib/tags";


export default function TagButton({ tag, link=true }) {

  return (
    <>
      {link ? (
              <Link href={`/tags/${tag.slug}`}>
              <a>#{tag.title}</a>
            </Link>
      ): 
      (<a>#{tag.title}</a>)
      }
      <style jsx>{`
        a {
          display: inline-block;
          border-radius: 3px;
          background-color: ${tag.color};
          color: ${tag.font_color};
          transition: background-color 0.3s ease;
          padding: 0.25em 0.5em;
        }
        a:active,
        a:hover {
          background-color: ${tag.hover_color};
        }
      `}</style>
    </>
  );
}
