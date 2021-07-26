import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../lib/api";
// import Layout from "../../components/layout";
import Image from "../components/image";
// import Seo from "../../components/seo";
import { getStrapiMedia } from "../lib/media";

const Article = ({ article }) => {
  const imageUrl = getStrapiMedia(article.image);

  //   const seo = {
  //     metaTitle: article.title,
  //     metaDescription: article.description,
  //     shareImage: article.image,
  //     article: true,
  //   };

  return (
    <div class="container">
      <header>...</header>
      <main class="container__main">
        {/* <!-- Left sidebar --> */}
        <aside class="container__left">...</aside>

        {/* <!-- Main content --> */}
        <article class="container__middle">...</article>

        {/* <!-- Right sidebar --> */}
        <nav class="container__right">...</nav>
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
