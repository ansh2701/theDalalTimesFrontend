import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../lib/api";
// import Layout from "../../components/layout";
import Image from "../components/image";
// import Seo from "../../components/seo";
import { getStrapiMedia } from "../lib/media";
import styles from "../styles/BlogPost.module.css";

const Article = ({ article }) => {
  const imageUrl = getStrapiMedia(article.image);

  //   const seo = {
  //     metaTitle: article.title,
  //     metaDescription: article.description,
  //     shareImage: article.image,
  //     article: true,
  //   };

  return (
    <div className={styles.container}>
      <header>...</header>
      <main className={styles.container__main}>
        {/* <!-- Left sidebar --> */}
        <aside className={styles.container__left}>...</aside>

        {/* <!-- Main content --> */}
        <article className={styles.container__middle}>
          {/* <ReactMarkdown source={article.content} escapeHtml={false} />
          <div>
            {article.author.picture && (
              <Image
                image={article.author.picture}
                style={{
                  position: "static",
                  borderRadius: "50%",
                  height: 30,
                }}
              />
            )}
          </div>
          <p className="uk-text-meta uk-margin-remove-top">
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p> */}
        </article>

        {/* <!-- Right sidebar --> */}
        <nav className={styles.container__right}>...</nav>
      </main>
      <footer>...</footer>
    </div>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(`/articles?slug=${params.slug}`);
  //   const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0] },
    revalidate: 1,
  };
}

export default Article;
