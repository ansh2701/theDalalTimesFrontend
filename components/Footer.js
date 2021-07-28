import { FaDiscord, FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__addr}>
        <h1 className={styles.footer__logo}>The Dalal Times</h1>

        <h2>About Us</h2>
        <h5>
          India&apos;s Largest Investor Community | A Community wherein members
          interact and grow their wealth
        </h5>
      </div>

      <ul className={styles.footer__nav}>
        <li className={styles.nav__item}>
          <h2 className={styles.nav__title}>Pages</h2>

          <ul className={styles.nav__ul}>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>

            <li>
              <Link href="/news">
                <a>News</a>
              </Link>
            </li>

            <li>
              <Link href="/tweet">
                <a>Tweet</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.nav__item}>
          <h2 className={styles.nav__title}>Media</h2>

          <ul className={styles.nav__ul}>
            <li>
              <Link href="https://www.facebook.com/groups/220188072841706/?ref=share">
                <a>
                  <FaFacebook />
                  Facebook
                </a>
              </Link>
            </li>

            <li>
              <Link href="https://t.me/stockmarket_encome">
                <a>
                  <FaTelegram />
                  Telegram
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/EncomeHQ?s=09">
                <a>
                  <FaTwitter />
                  Twitter
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/qckPBF5JzZ">
                <a>
                  <FaDiscord />
                  Discord
                </a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>

      <div className={styles.legal}>
        <p>&copy; 2020 TheDalalTimes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
