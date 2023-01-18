import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "src/styles/header.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <>
      <Head>
        <title>양수교회</title>
        <meta name="description" content="양수교회에 오신 것을 환영합니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="mb-4">
        <h1 className="visually-hidden">양수교회</h1>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">
              <Image src="/logo.png" width={250} height={100} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">교회소개</Nav.Link>
                <Nav.Link href="#pricing">교회소식</Nav.Link>
                <Nav.Link href="#deets">교회 앨범</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  오시는 길
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
