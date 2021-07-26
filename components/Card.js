import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CssCard.module.css";

const Card = ({ article, blogClass }) => {
  return (
    <Link href={`/${article.slug}`}>
      <a>
        <div className={styles[blogClass]}>
          <div className={styles.card__cover}>
            <div className={styles.image}>
              <Image src={article.image.url} layout="fill" alt="" />
            </div>
          </div>
          <div className={styles.card__content}>
            <h2 className={styles.title}>{article.title}</h2>
            <p className={styles.description}>{article.description}</p>

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
                <h3 className={styles.profileName}>Maya Eleanor Peña</h3>
                <p className={styles.profileDate}>25 June 2021 . 5 min read</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </a>
    </Link>
  );
};

export default Card;
