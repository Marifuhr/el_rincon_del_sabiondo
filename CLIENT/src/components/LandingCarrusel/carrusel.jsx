import Carousel from "react-bootstrap/Carousel";
import "./carrusel.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselFadeExample() {
  return (
    <div className="container-xxl" >
      <Carousel variant="dark" className="carousel">
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid "
            src="https://res.cloudinary.com/djbpbygx4/image/upload/v1688490992/kxvlhzi2yiptzxzaz9ko.jpg"
            alt="El rincon del sabiondo"
          />
          <Carousel.Caption>
            {/* <button>entrar</button>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid"
            src="https://res.cloudinary.com/djbpbygx4/image/upload/v1688491407/xoqigykoqdjkbnn8mwxc.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid"
            src="https://res.cloudinary.com/djbpbygx4/image/upload/v1688491461/jsf9h0nrwrie08xz8ylt.jpg"
            alt="3x2"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid"
            src="https://res.cloudinary.com/djbpbygx4/image/upload/v1688491487/tnfam7cmzlfsnqnnjntu.jpg"
            alt="Descubre un mundo"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
