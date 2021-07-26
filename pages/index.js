import Card from "../components/Card";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Blog.module.css";

const blog = ({ data }) => {
  const large = [0, 9];
  const small = [1, 2, 3, 6, 7, 8];
  const checkIndex = (index) => {
    if (large.includes(index)) return "large";
    else if (small.includes(index)) return "small";
    else return "medium";
  };
  return (
    <Layout>
      <div className={styles.hero}>
        <h1>The Dalal Times</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.postFeed}>
            {data.map((article, index) => (
              <Card
                article={article}
                key={index}
                blogClass={checkIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default blog;

export async function getStaticProps() {
  const data = await fetchAPI("/articles?_start=1&_limit=10");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
