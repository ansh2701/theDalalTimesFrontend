import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <h1
        style={{
          textAlign: "center",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        404 | Page Not Found
      </h1>
    </Layout>
  );
}
