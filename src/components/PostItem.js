import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import TagButton from './TagButton'

export default function PostItem({ post }) {
  return (
    <div className='post-item'>
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.created)} />
        <h2>{post.title}</h2>        
      </a>
    </Link>
            <div style={{fontSize: '0.8rem', marginTop: '1%', marginBottom: '1%'}}>
            {post.tags.map((t, i)=>{
    
                        return (
                        <div style={{display: 'inline-block', marginRight: '0.5rem'}}>
                          <TagButton tag={t} link={false} />
                        </div>)
            })}
            </div>
            <span className="read_time">  {post.min_reading_time} min read </span>
            
            <span style={{color: "black", marginLeft: '5%', fontSize: '0.9rem', fontFamily: 'Nunito'}}>
              <img src='/static/assets/like.png' style={{maxHeight: '15px', marginRight: '0.5%'}}/>
             {post.likes} Like it
            </span>
            <p>--------</p>    
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
            .read_time {
              font-family: 'Nunito', sans-serif;
              font-size: 0.9rem;
              color: #9e4d4d;
              margin-top: 3%;
            }
  
          `}
        </style>
            </div>
  );
}
