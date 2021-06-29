import Layout from "../../components/Layout";
import BasicMeta from "../../components/meta/BasicMeta";
import OpenGraphMeta from "../../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/meta/TwitterCardMeta";
import Twitter from "../../assets/twitter-alt.svg";
import GitHub from "../../assets/github-alt.svg";
import Telegram from "../../assets/telegram.svg";
import Email from '../../assets/mailbox.svg'
import config from "../../configs/main";


export default function Index() {

  const url = "/contacts";
  const title = "Contacts";

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <div className="container">
        <div>
          <h1>Hi, You can contact with me via</h1>
          <ul style={{marginTop: '10%'}}>
            <li>
              <a
                title="Telegram"
                href={`https://t.me/${config.telegram_account}`}
                target="_blank"
                rel="noopener"
              >
                <Telegram width={30} height={30} fill={"#222"} className="contact_icon"/>
                <span style={{marginLeft: '1%'}}>Telegram</span> 
              </a>
            </li>

            <li>
              <a
                title="Twitter"
                href={`https://twitter.com/${config.twitter_account}`}
                target="_blank"
                rel="noopener"
              >
                <Twitter width={30} height={30} fill={"#222"} className="contact_icon" />
                <span style={{marginLeft: '1%'}}>Twitter</span>
              </a>
            </li>

            <li>
              <a
                title="Github"
                href={`https://github.com/${config.github_account}`}
                target="_blank"
                rel="noopener"
              >
                <GitHub width={30} height={30} fill={"#222"} className="contact_icon" />
                <span style={{marginLeft: '1%'}}>Github</span>
              </a>
            </li>


            <li>
                <Email width={30} height={30} fill={"#222"}/>
             <span style={{marginLeft: '1%'}}>shvidkiy.dmitriy@gmail.com</span> 
            </li>


          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
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
        li {
          list-style: none;
          font-size: 1.2rem;
          font-family: "Nunito", sans-serif;
          margin-top: 2%
        }
        li a {
            color: #4c5ad9;
        }
        li a:hover {
            color: red;
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          li {
              font-family: "Nunito", sans-serif;
              font-size: 2rem;
          }
        }
      `}</style>
    </Layout>
  );
}
