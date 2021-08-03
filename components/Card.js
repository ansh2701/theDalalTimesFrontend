import Link from "next/link";
import Image from "next/image";
import styles from "../styles/CssCard.module.css";

const Card = ({ article, blogClass }) => {
  let currentDate = new Date(article.updated_at);
  return (
    <>
      <div>
        <Link href={`/blog/${article.slug}`}>
          <a>
            <div className={styles[blogClass]}>
              <div className={styles.card__cover}>
                <div className={styles.image}>
                  {article.image && (
                    <Image
                      src={article.image.url}
                      layout="fill"
                      alt={article.image.name}
                    />
                  )}
                </div>
              </div>
              <div className={styles.card__content}>
                <h2 className={styles.title}>{article.title}</h2>
                <p className={styles.description}>{article.description}</p>
                {article.author && (
                  <div className={styles.cardProfile}>
                    <div className={styles.img2}>
                      {article.author.picture && (
                        <Image
                          src={article.author.picture.url}
                          height={50}
                          width={50}
                          className={styles.img2}
                          alt={article.author.name}
                        />
                      )}
                    </div>
                    <div className={styles.cardProfileInfo}>
                      <h3 className={styles.profileName}>
                        {article.author.name}
                      </h3>
                      <p className={styles.profileDate}>
                        {currentDate.toDateString()}
                      </p>
                      {/* <p className={styles.profileDate}>25 June 2021</p> */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* </div> */}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Card;
