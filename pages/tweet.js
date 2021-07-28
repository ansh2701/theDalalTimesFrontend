import parse from "html-react-parser";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";
import Layout from "../components/Layout";

const tweet = ({ tweet, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.seo} />
      <div className="container">
        {tweet.map((twe, index) => (
          <div key={index}>{parse(twe.tweet)}</div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          flex-direction: column;
          align-content: center;
          background-color: #191b1f;
          /* min-height: 90vw; */
        }
      `}</style>
    </Layout>
  );
};

export default tweet;

export async function getStaticProps() {
  // Run API calls in parallel
  const [tweet, homepage] = await Promise.all([
    fetchAPI("/tweets?_start=0&_limit=9"),
    fetchAPI("/twitter"),
  ]);

  return {
    props: { tweet, homepage },
    revalidate: 1,
  };
}
