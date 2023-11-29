import Head from "next/head";
import { Header, Footer } from "@/layout";
import { GlobalStyle } from "@/styles/globalStyle";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>COOKSUP</title>
        <meta
          name="description"
          content="COOKSUP 맞춤형 푸드 솔루션, 미래의 푸드 서비스를 시작하세요"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="COOKSUP" />
        <meta
          property="og:description"
          content="COOKSUP 맞춤형 푸드 솔루션, 미래의 푸드 서비스를 시작하세요"
        />
        <meta property="og:image" content="/favicon.png" />
        <meta
          property="og:url"
          content={"https://www.lesik.co.kr/" || "https://www.cooksup.co.kr/"}
        />
        <meta property="og:type" content="website" />
      </Head>
      <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  );
};

export default App;
