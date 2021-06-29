import React from "react";
import PostItem from "./PostItem";
import axios from 'axios'


export default function PostListItems({posts}){

    const [Posts, SetPosts] = React.useState(posts.results)
    const [Next, SetNext] = React.useState(posts.links.next)
    const [Loading, setLoading] = React.useState(false)

    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    })
  
    const handleScroll = () => {
  
      const lastLoaded = document.querySelector('.post-list > :last-child')
  
      if (lastLoaded) {
        const lastUserLoadedOffset = lastLoaded.offsetTop + lastLoaded.clientHeight
  
        const pageOffset = window.pageYOffset + window.innerHeight
        if (pageOffset > lastUserLoadedOffset) {

          if (Next && !Loading) {
            setLoading(true)
            axios.get(Next).then(
              (res)=>{
                SetNext(res.data.links.next)
                SetPosts([...Posts, ...res.data.results])
                setLoading(false)
              },
              (err)=>{
                console.log(err)
              }
            )
          }
        }
      }
    }



    return (
    <div className={"posts"}>
    <ul className={"post-list"}>
      {Posts.map((it, i) => (
        <li key={i}>
          <PostItem post={it} />
        </li>
      ))}
      {Loading ? (<div>Loading</div>): ''}
    </ul>
        <style jsx>{`
        .container {
          display: flex;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          list-style: none;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .posts li {
          margin-bottom: 1.5rem;
        }
        .post-list {
          flex: 1 0 auto;
        }
      `}</style>
  </div>
    )
}