import styles from "../styles/NewsCard.module.css";

// //Temporarily store data here
const PostsData = [
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
  {
    category: "News",
    title: "CNN Acquire BEME",
    text: "CNN purchased Casey Neistat's Beme app for $25million.",
    image: "https://source.unsplash.com/user/erondu/600x400",
  },
  {
    category: "Travel",
    title: "Nomad Lifestyle",
    text: "Learn our tips and tricks on living a nomadic lifestyle",
    image: "https://source.unsplash.com/user/_vickyreyes/600x400",
  },
  {
    category: "Development",
    title: "React and the WP-API",
    text: "The first ever decoupled starter theme for React & the WP-API",
    image: "https://source.unsplash.com/user/ilyapavlov/600x400",
  },
];

// // Start App

const CardCarousel = ({ posts }) => {
  return (
    <div>
      <header className={styles.appHeader}></header>

      <section className={styles.appTitle}>
        <div className={styles.appTitleContent}>
          <h1>Latest News</h1>
          <p>Related To Stocks and Trading</p>
        </div>
      </section>

      <div className={styles.appCardList} id="appCardList">
        {posts.map((post, index) => (
          <Card key={index} index={index} details={post} />
        ))}
      </div>
    </div>
  );
};

// const Title = () => {
//   return (

//   );
// };

// const Button = () => {
//   return (

//   );
// };

const CardHeader = ({ image, category }) => {
  const style = {
    backgroundImage: "url(" + image + ")",
  };
  return (
    <header style={style} className={styles.cardHeader}>
      <h4 className={styles.title}>{category}</h4>
    </header>
  );
};

const CardBody = ({ text, title }) => {
  return (
    <div className={styles.cardBody}>
      <p className={styles.date}>March 20 2015</p>

      <h2>{title}</h2>

      <p className={styles.bodyContent}>{text}</p>

      <button className={styles.buttonPrimary}>
        {/* <i className={styles.fa fa-chevron-right}></i> Find out more */}
        Find out more
      </button>
    </div>
  );
};

const Card = ({ details }) => {
  return (
    <article className={styles.card}>
      <CardHeader category={details.category} image={details.urlToImage} />
      <CardBody title={details.title} text={details.description} />
    </article>
  );
};

export default CardCarousel;
