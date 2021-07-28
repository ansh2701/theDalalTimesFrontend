import Markdown from "markdown-to-jsx";
import Moment from "react-moment";
import { useEffect, useState } from "react";
import Script from "next/script";
import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";
import Image from "next/image";
import Seo from "../components/seo";
import styles from "../styles/BlogPost.module.css";

const Article = ({ article }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setEmoji((window.emojicom_widget = { campaign: "Ue0a6qKOrpr93PvGC248" }));
  }, []);

  return (
    <Layout>
      <Seo seo={seo} />
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.header__content}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className={styles.cardProfile}>
              <div className={styles.img2}>
                <Image
                  src={article.author.picture.formats.small.url}
                  height={50}
                  width={50}
                  className={styles.img2}
                  alt=""
                />
              </div>
              <div className={styles.cardProfileInfo}>
                <h3 className={styles.profileName}>{article.author.name}</h3>
                <p className={styles.profileDate}>
                  <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.cover__wrapper}>
          <div className={styles.cover__image}>
            <Image src={article.image.url} height={800} width={1000} alt="" />
          </div>
        </div>
        <main className={styles.container__main}>
          {/* <!-- Left sidebar --> */}
          <aside className={styles.container__left}></aside>

          {/* <!-- Main content --> */}
          <article className={styles.container__middle}>
            <Markdown>{article.content}</Markdown>
          </article>

          {/* <!-- Right sidebar --> */}
          <nav className={styles.container__right}></nav>
        </main>
        <footer>
          <div id="emojicom-widget-inline"></div>
        </footer>

        <Script>{emoji}</Script>
        <Script src="https://cdn.emojicom.io/embed/widget.js" async></Script>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  // const articles = await fetchAPI("/articles");

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
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
