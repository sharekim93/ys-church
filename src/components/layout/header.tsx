import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/header.module.scss";

const Header = () => {
  return (
    <>
      <Head>
        <title>양수교회</title>
        <meta name="description" content="양수교회에 오신 것을 환영합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between px-4 py-3 mb-4 border-bottom bg-light">
        <Link
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <Image src="/logo.png" width={250} height={100} alt="logo" />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              <p className={styles.linkBtn}>교회소개</p>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              <p className={styles.linkBtn}>교회소식</p>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              <p className={styles.linkBtn}>교회앨범</p>
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              <p className={styles.linkBtn}>오시는길</p>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
