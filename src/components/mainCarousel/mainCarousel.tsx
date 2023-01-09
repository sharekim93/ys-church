import Image from "next/image";
import { Carousel } from "react-bootstrap";

const mainCarousel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/vercel.svg"
          alt="First slide"
          width={590}
          height={398}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/next.svg"
          alt="Second slide"
          width={590}
          height={398}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="/thirteen.svg"
          alt="Third slide"
          width={590}
          height={398}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default mainCarousel;
