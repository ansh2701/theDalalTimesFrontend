import parse from "html-react-parser";
import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";

const tweet = ({ tweet }) => {
  return (
    <Layout>
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
        }
      `}</style>
    </Layout>
  );
};

export default tweet;

export async function getStaticProps() {
  const tweet = await fetchAPI("/tweets?_start=0&_limit=9");

  if (!tweet) {
    return {
      notFound: true,
    };
  }

  return {
    props: { tweet }, // will be passed to the page component as props
  };
}
