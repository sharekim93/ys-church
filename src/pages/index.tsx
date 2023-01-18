import Script from "next/script";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MainCarousel } from "../components/mainCarousel";
import { FaPlaceOfWorship, FaCross, FaHome, FaWindows } from "react-icons/fa";

import { Nanum_Pen_Script, Zen_Kaku_Gothic_Antique } from "@next/font/google";

const nanum_pen = Nanum_Pen_Script({
  subsets: ["korean"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=70a46a1cc6da826d702488c66e55aa7d&autoload=false"
        strategy="lazyOnload"
        onLoad={() => {
          kakao.maps.load(() => {
            const container = document.getElementById("map");
            const markerPosition = new kakao.maps.LatLng(37.546679, 127.320796);
            const options = {
              center: markerPosition, //지도의 중심좌표.
              level: 2, //지도의 레벨(확대, 축소 정도)
            };
            const map = new kakao.maps.Map(container, options);

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
              position: markerPosition,
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
          });
        }}
      />
      <main>
        <h2 className="visually-hidden">메인화면</h2>
        <Container>
          <h3 className="visually-hidden">표어 이미지</h3>
          <MainCarousel />
        </Container>
        <Container fluid className="">
          <h3 className="text-center mt-4 py-4">예배시간 안내</h3>
          <Row className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between mt-4 p-4 border bg-light ">
            <Col sm className="text-center fs-6 border-end">
              <h4 className="visually-hidden">주일예배</h4>
              <p className="fs-1">
                <FaCross />
              </p>
              <p className="fs-4">주일예배</p>
              <p className="text-muted">주일 오전 11:00</p>
              <p className="text-muted">본당</p>
            </Col>
            <Col sm className="text-center fs-6 border-end">
              <h4 className="visually-hidden">수요예배</h4>
              <p className="fs-1">
                <FaPlaceOfWorship />
              </p>
              <p className="fs-4">수요예배</p>
              <p className="text-muted">수요일 오전 10:00</p>
              <p className="text-muted">소예배실</p>
            </Col>
            <Col sm className="text-center fs-6">
              <h4 className="visually-hidden">구역예배</h4>
              <p className="fs-1">
                <FaHome />
              </p>
              <p className="fs-4">구역예배</p>
              <p className="text-muted">금요일</p>
              <p className="text-muted">각 가정</p>
            </Col>
            <Col sm className="text-end fs-6 visually-hidden">
              <h4 className="visually-hidden">그 외예배</h4>
              <p className="fs-4 text-center">그 외 예배</p>
              <Row>
                <Col className="">어린이부 예배</Col>
                <Col className="text-muted">주일 오전 9:30 소예배실</Col>
              </Row>
              <Row>
                <Col className="">주일 오후예배</Col>
                <Col className="text-muted">주일 오후 1:30 소예배실</Col>
              </Row>
              <Row>
                <Col className="">새벽기도</Col>
                <Col className="text-muted">매일 오전 5:00 소예배실</Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg>
              <h3 className="text-center mt-4 py-4">오시는 길</h3>
              <div id="map" className="w-100" style={{ height: 400 }}></div>
            </Col>
            <Col lg>
              <h3 className="text-center mt-4 py-4">교회소식</h3>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
