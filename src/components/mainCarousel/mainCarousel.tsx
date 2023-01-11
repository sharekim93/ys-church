import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const mainCarousel = () => {
  return (
    <Carousel fade className="w-100">
      <Carousel.Item>
        <Image
          className="d-block"
          src="/gd_y202311.jpg"
          alt="banner"
          width={590}
          height={398}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default mainCarousel;
