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
            src="src\assets\image\El Rincon del Sabiondo.jpg"
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
            src="src\assets\image\seleccion de libros.jpg"
            alt="Second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid"
            src="src\assets\image\carousel2.jpeg"
            alt="3x2"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image_size_asjdlasj w-80 img-fluid"
            src="src\assets\image\Descubre un mundo.jpg"
            alt="Descubre un mundo"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
