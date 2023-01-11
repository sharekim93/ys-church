import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Noto_Sans_KR } from "@next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["korean"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`container-fluid vh-100 gx-0 ${noto.className}`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
