import BlogCard from "../components/BlogCard";
import { fetchAPI } from "../lib/api";
import styles from "../styles/Blog.module.css";

const blog = ({ data }) => {
  const large = [0, 9];
  const short = [1, 2, 3, 6, 7, 8];
  const medium = [4, 5];
  const checkIndex = (index) => {
    if (large.includes(index)) return "large";
    else if (short.includes(index)) return "short";
    else return "medium";
  };
  return (
    <>
      <div className={styles.hero}>
        <h1>The Dalal Times</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.postFeed}>
            {data.map((article, index) => (
              <BlogCard
                article={article}
                key={index}
                blogClass={checkIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
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
