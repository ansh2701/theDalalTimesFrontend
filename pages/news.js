import CardCarousel from "../components/CardCarousel";

const news = ({ posts }) => {
  return (
    <div style={{ backgroundColor: "#341cac" }}>
      <CardCarousel posts={posts.articles} />
    </div>
  );
};

export default news;

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?category=business&pageSize=10&language=en&apiKey=2c69fdafd7774c9d9fbe95aeaffd4321`
  );
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
