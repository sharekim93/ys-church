import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainCarousel } from "../components/mainCarousel";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="visually-hidden">메인화면</h1>
        <Container>
          <h2 className="visually-hidden">소개 및 표어 이미지</h2>
          <Row>
            <Col>
              <h3 className="visually-hidden">양수교회 소개글</h3>
              <p className="lead text-start">양수교회에 오신 것을 환영합니다</p>
            </Col>
            <Col>
              <h3 className="visually-hidden">표어 이미지</h3>
              <MainCarousel />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
