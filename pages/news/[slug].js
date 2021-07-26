import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      {/* <iframe
        src={slug}
        width="100%"
        height="100%"
        style={{ border: none }}
      ></iframe> */}
      {slug}
    </div>
  );
};

export default Article;
