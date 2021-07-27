import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__addr}>
        <h1 className={styles.footer__logo}>The Dalal Times</h1>

        <h2>About Us</h2>
      </div>

      <ul className={styles.footer__nav}>
        <li className={styles.nav__item}>
          <h2 className={styles.nav__title}>Media</h2>

          <ul className={styles.nav__ul}>
            <li>
              <a href="#">Online</a>
            </li>

            <li>
              <a href="#">Print</a>
            </li>

            <li>
              <a href="#">Alternative Ads</a>
            </li>
          </ul>
        </li>

        <li className={styles.nav__item}>
          <h2 className={styles.nav__title}>Legal</h2>

          <ul className={styles.nav__ul}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.legal}>
        <p>&copy; 2019 Something. All rights reserved.</p>

        <div className={styles.legal__links}>
          <span>
            Made with <span className={styles.heart}>♥</span> remotely from
            Anywhere
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
