import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
