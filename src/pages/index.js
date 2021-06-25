import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";



export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"}/>
      <OpenGraphMeta url={"/"} /> 
      <TwitterCardMeta url={"/"} /> 
      <div className="container">
        <div>
          <h1>
           Hi, i'm a Django & React Developer<span className="fancy">.</span>
          </h1>
          <span className="handle">@and litteraly a nice guy</span>
          <h2>Welcome to my dojo, samurai!</h2>

          <h3>
            Full Stack developer from Russia. Since beginning my journey as a programmer nearly 5 years ago,
            i've done work for institutions, agencies, startups, create several self projects. 
            I collaborated with very talented people to create digital products for business and consumers.
            I'm confident, naturally curious, can solve business problems and perpetually working
                on improving my skills.
                </h3>
          <SocialList />
        </div>
      </div>

      <style jsx>{`
      .container {
              display: block;
              max-width: 50rem;
              width: 100%;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
              z-index: 0;
            }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        h3 {
          font-weight: 400;
          line-height: 1.6;
          font-size: 1rem;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>

    </Layout>
  );
}
