// for css
import { Carousel } from "react-bootstrap";
import "./HeroCarousel.css";


function HeroCarousel({slide}) {
  return (
    <>
      <Carousel id="home" className="carousel-hero" slide={false}>
        {slide.map((item, idx) => {
          return (
            <Carousel.Item key={idx} className="h-100">
              <img
                src={item.img}
                alt="hero-img"
                className="w-100 h-100 object-fit-cover"
              />
              <Carousel.Caption className="bg-white NA-text-gray py-5 NA-bottom-border ">
                <h3 className="fw-bolder text-capitalize">{item.title}</h3>
                <p className="NA-fs p-2">{item.desc}</p>
                <a
                  className="btn btn-primary bg-main-color border-0 px-4"
                  href="#"
                  role="button"
                >
                  Read More
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}

export default HeroCarousel;
