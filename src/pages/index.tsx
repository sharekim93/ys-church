import { Inter } from "@next/font/google";
import { MainCarousel } from "../components/mainCarousel";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainCarousel />
      </main>
    </>
  );
}
