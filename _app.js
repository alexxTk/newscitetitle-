// import '../styles/globals.css'
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./components/blogfile";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>New project for training</title>
        <link
          href="<https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css>"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
