import "../styles/globals.css";
// import App from "next/app";
import Head from "next/head";
import NextNprogress from "nextjs-progressbar";
// import { createContext } from "react";
// import { fetchAPI } from "../lib/api";

// Store Strapi Global object in context
// export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  // const { global } = pageProps;

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/mrxox/image/upload/v1627476000/Whats_App_Image_2021_07_27_at_17_51_21_0907e4c81e.png"
        />
        <meta
          name="google-site-verification"
          content="TLRuLpNzr_kXf2PreLdiwtiuV07H7KsFK-CyU6FzuGw"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: ` window.emojicom_widget = { campaign: 'Ue0a6qKOrpr93PvGC248' }`,
          }}
        />
        <script src="https://cdn.emojicom.io/embed/widget.js" async></script>
      </Head>

      {/* <GlobalContext.Provider value={global}> */}
      <NextNprogress />
      <Component {...pageProps} />
      {/* </GlobalContext.Provider> */}
    </>
  );
};

// MyApp.getInitialProps = async (ctx) => {
//   const appProps = await App.getInitialProps(ctx);

//   const global = await fetchAPI("/global");

//   return { ...appProps, pageProps: { global } };
// };

export default MyApp;
