import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import Telegram from "../assets/telegram.svg";
import config from "../configs/main";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>

      <a
        title="Telegram"
        href={`https://t.me/${config.telegram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Telegram width={24} height={24} fill={"#222"} />
      </a>


      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
