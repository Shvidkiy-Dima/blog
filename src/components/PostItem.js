import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";


export default function PostItem({ post }) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.created)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
