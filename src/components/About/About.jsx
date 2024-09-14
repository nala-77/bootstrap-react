// for css
import "./About.css";

import Title from "../Title/Title";
import { Col, Row } from "react-bootstrap";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About({ img, header, descOne, list, descTwo }) {
  return (
    <section id="about" className="py-5 pd-x-5">
      <Title
        header="about us"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Row>
        <Col lg={6} md={12} sm={12} className="mb-sm-3 xsmall-mb position-relative">
          <img src={img} alt="about-img" className="w-100 img-height object-fit-cover" />
          <div className="for-vedio position-absolute bg-main-color d-flex justify-content-center align-items-center rounded-5 top-50 start-50 translate-middle">
          <FontAwesomeIcon icon={faPlay} className="text-light"/>
          </div>
        </Col>
        <Col lg={6} sm={12} >
          <h2 className="fw-bold NA-text-gray xsmall-h2">{header}</h2>
          <p className="fst-italic">{descOne}</p>
          <ul className="list-unstyled  NA-list-wdth my-4 w-100">
            {list.map((item, idx) => {
              return (
                <li key={idx} className="d-flex mb-3">
                  <div>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="NA-text-main-color me-1 fs-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M464 128 240 384l-96-96m0 96-96-96m320-160L232 284"
                    ></path>
                  </svg>
                  </div>
                  {item}
                </li>
              );
            })}
          </ul>
          <p>{descTwo}</p>
        </Col>
      </Row>
    </section>
  );
}
export default About;
