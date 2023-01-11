import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainCarousel } from "../components/mainCarousel";
import { FaPlaceOfWorship } from "react-icons/fa";

import { Nanum_Pen_Script } from "@next/font/google";

const nanum_pen = Nanum_Pen_Script({
  subsets: ["korean"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main>
        <h1 className="visually-hidden">메인화면</h1>
        <Container>
          <h2 className="visually-hidden">표어 이미지</h2>
          <MainCarousel />
        </Container>
        <Container>
          <h2 className="text-center mt-4 py-4 bg-primary">예배시간 안내</h2>
          <Row className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mt-4 py-4">
            <Col className="text-center">
              <FaPlaceOfWorship />
              <p className="">주일예배</p>
            </Col>
            <Col className="text-center">
              <p className="">수요예배</p>
            </Col>
            <Col className="text-center">Col 3</Col>
            <Col className="text-center">Col 4</Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
