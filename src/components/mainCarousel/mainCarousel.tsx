import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const mainCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block"
          src="/gd_y202311.jpg"
          alt="First slide"
          width={590}
          height={398}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default mainCarousel;
