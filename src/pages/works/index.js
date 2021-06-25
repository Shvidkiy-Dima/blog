import React from "react";
import Layout from "../../components/Layout";
import axios from "axios";

export default function Index({ works }) {
  const url = "/works";
  const title = "All works";

  return (
    <Layout>
      <div className={"container"}>
        <div className={"posts"}>
          <ul>
            {works.map((w, i) => {
              return (
                <li style={{ listStyle: "none" }}>
                  <h2>{w.title}</h2>
                  <img src={w.preview} style={{ maxWidth: "40%" }} />
                  <p>{w.description}</p>
                  {w.git_link ? (
                    <a href={w.git_link}>
                      <p>Github: {w.git_link}</p>
                    </a>
                  ) : (
                    ""
                  )}
                  {w.link ? (
                    <a href={w.link}>
                      <p>Link: {w.link}</p>
                    </a>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <style jsx>{`
        a {
          color: red;
        }
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
    </Layout>
  );
}

export async function getStaticProps() {
  const works = (await axios.get("http://localhost:8000/api/work/")).data;
  return {
    props: {
      works,
    },
    revalidate: 60 * 60,
  };
}
