import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Head>
        <title>양수교회</title>
        <meta name="description" content="양수교회 홈페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          로고위치
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              교회소개
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              교회소식
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              교회앨범
            </Link>
          </li>
          <li>
            <Link href="#" className="nav-link px-2 link-dark">
              오시는길
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
