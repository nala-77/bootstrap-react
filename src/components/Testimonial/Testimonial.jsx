// for css
import { Card, Carousel, Col, Row } from "react-bootstrap";
import "./Testimonial.css";
import Title from "../Title/Title";

function Testimonial({ testimonialCard1 }) {
  return (
    <section id="" className="py-5 pd-x-5">
      <Title
        header="Testimonial"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Row>
        {testimonialCard1.map((item, idx) => {
          return (
            <Col lg={4} key={idx}>
              <Card className="border-0 ">
                <Card.Body>
                  <Card.Text className="position-relative fst-italic py-5 px-4 NA-light-gray rounded-1 mb-5">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-left"
                      className="svg-inline--fa fa-quote-left  me-3 NA-text-main-color"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fill="currentColor"
                        d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"
                      ></path>
                    </svg>

                    {item.qoute}
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="quote-right"
                      className="svg-inline--fa fa-quote-right ms-2 NA-text-main-color"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                    >
                      <path
                        fill="currentColor"
                        d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z"
                      ></path>
                    </svg>
                    <div className="img-wrapper position-absolute ">
                      <img
                        src={item.img}
                        className="w-100 rounded-circle"
                        alt="testimonial"
                      />
                    </div>
                  </Card.Text>
                  <Card.Title className="px-4">{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 px-4 text-muted">
                    {item.subtitle}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Testimonial;
