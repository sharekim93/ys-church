import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainCarousel } from "../components/mainCarousel";

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
          <h2 className="visually-hidden">소개 및 표어 이미지</h2>
          <Row gx-3>
            <Col lg className={nanum_pen.className}>
              <h3 className="visually-hidden">양수교회 소개글</h3>
              <p className="display-5 ">양수교회에 오신 것을 환영합니다</p>
              <figure className="text-start">
                <blockquote>
                  <p className="text-muted text-start">
                    야베스가 이스라엘 하나님께 아뢰어 가로되
                  </p>
                  <p className="text-muted text-start">
                    원컨대 주께서 내게 복에 복을 더하사 나의 지경을 넓히시고
                  </p>
                  <p className="text-muted text-start">
                    주의 손으로 나를 도우사 나로 환난을 벗어나 근심이 없게
                    하옵소서 하였더니
                  </p>
                  <p className="text-muted text-start">
                    하나님이 그 구하는 것을 허락하셨더라
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <cite title="역대상 4:10"></cite>
                  역대상 4:10
                </figcaption>
              </figure>
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
