import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const mainCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/gd_y202311.jpg"
          alt="banner"
          width={590}
          height={398}
          style={{
            height: "40vh",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default mainCarousel;
