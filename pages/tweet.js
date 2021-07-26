import Layout from "../components/Layout";

const tweet = () => {
  return (
    <Layout>
      <div className="container">
        <div>
          <blockquote class="twitter-tweet" data-theme="lights">
            <p lang="en" dir="ltr">
              One of the best purchases I have made the last years was buying a
              condo in Dubai. <br />
              <br />
              And guess what, it was with{" "}
              <a href="https://twitter.com/hashtag/BITCOIN?src=hash&amp;ref_src=twsrc%5Etfw">
                #BITCOIN
              </a>{" "}
              <br />
              <br />
              Now I only have to book the flight and sweat my ass off in this
              beautiful dessertplace. <br />
              <br />
              Greetings from Dubai my apes!{" "}
              <a href="https://twitter.com/hashtag/dubai?src=hash&amp;ref_src=twsrc%5Etfw">
                #dubai
              </a>{" "}
              <a href="https://twitter.com/hashtag/crypto?src=hash&amp;ref_src=twsrc%5Etfw">
                #crypto
              </a>{" "}
              <a href="https://twitter.com/hashtag/nft?src=hash&amp;ref_src=twsrc%5Etfw">
                #nft
              </a>{" "}
              <a href="https://twitter.com/hashtag/ethereum?src=hash&amp;ref_src=twsrc%5Etfw">
                #ethereum
              </a>{" "}
              <a href="https://twitter.com/hashtag/btc?src=hash&amp;ref_src=twsrc%5Etfw">
                #btc
              </a>{" "}
              <a href="https://t.co/Zanrch5zk1">pic.twitter.com/Zanrch5zk1</a>
            </p>
            &mdash; The Real Crypto Kong | APESHIT | Simple TA &amp; FA
            (@CryptoKongOG){" "}
            <a href="https://twitter.com/CryptoKongOG/status/1419246140491456512?ref_src=twsrc%5Etfw">
              July 25, 2021
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
};

export default tweet;
