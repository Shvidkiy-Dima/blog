import Link from "next/link";
import { useRouter } from "next/router";
import Like from './Like'

export default function ContentTable({slug, headers}) {
  return (

      <div className={"container"}>

        <ul>
          {headers.map((h, i)=>{
            return (
              <li>
              <Link href={`#${h.anchor}`}>
                <a>{h.title}</a>
              </Link>
            </li>
  
            )
          })}

        <li>

            <Like slug={slug}/>
        </li>


     </ul>


        <style jsx>
          {`
            .container {
              width: 0;
            }
            ul {
              opacity: 0;
              width: 100%;
              height: 100vh;
              text-align: center;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              top: 0;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              z-index: 1;
              transform: translateY(100%);
              transition: opacity 200ms;
            }
            .active ul {
              opacity: 1;
              transform: translateY(0);
            }
            li {
              margin-bottom: 1.75rem;
              font-size: 2rem;
              padding: 0 1.5rem 0 0;
            }
            li:last-child {
              margin-bottom: 0;
            }
            .active {
              color: #222;
            }

            @media (min-width: 769px) {
              .container {
                width: 3rem;
                display: block;
                padding-right: 10%;
              }
              ul {
                opacity: 1;
                width: 8rem;
                top: auto;
                display: block;
                transform: translateY(0);
              }
              li {
                font-size: 1rem;
                padding: 0;
              }
            }
          `}
        </style>
      </div>
 
  );
}
