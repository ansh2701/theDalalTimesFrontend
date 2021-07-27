import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../lib/api";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/BlogPost.module.css";

const Article = ({ article }) => {
  //   const seo = {
  //     metaTitle: article.title,
  //     metaDescription: article.description,
  //     shareImage: article.image,
  //     article: true,
  //   };
  let currentDate = new Date(article.updated_at);
  return (
    <Layout>
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
                  {currentDate.toDateString()}
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
          <aside className={styles.container__left}>
            {/* <h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem minima enim aliquid sequi ipsam quas. At optio
              quia, a beatae tempore dignissimos officia ipsum veritatis
              architecto, sunt temporibus corrupti tempora?
            </h1> */}
          </aside>

          {/* <!-- Main content --> */}
          <article className={styles.container__middle}>
            <ReactMarkdown>{article.content}</ReactMarkdown>
            {/* <div>
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
    </Layout>
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
