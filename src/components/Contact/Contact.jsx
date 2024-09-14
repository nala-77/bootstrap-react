// for css
import "./Contact.css";

import Title from "../Title/Title";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact({ contactInfo }) {
  return (
    <section id="contact" className="contact py-5">
      <Title
        header="contact"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="contact map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104995.01624685772!2d135.40363605169463!3d34.67757047565934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1snl!2snl!4v1726285408410!5m2!1snl!2snl"
          className="w-100"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Row className="pd-x-5 m-0 pt-5">
        <Col lg={6} className="d-flex flex-wrap justify-content-between gap-1">
          {contactInfo?.map((item, idx) => {
            return (
              <Col
                xl={idx == 0 ? 12 : 6}
                lg={idx == 0 ? 12 : 6}
                xs={12}
                md={4}
                sm={4}
                key={idx}
                className="NA-text-gray text-center mb-2 shadow py-3 px-2"
              >
                <div className="edit-circle d-flex justify-content-center mb-3 mx-auto rounded-circle align-items-center NA-border">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="NA-text-main-color fs-4"
                  />
                </div>
                <div>
                  <h3 className="fw-bolder fs-5 text-capitalize ">
                    {item.title}
                  </h3>
                  <p className="text-capitalize fs-6 NA-fs">{item.info}</p>
                </div>
              </Col>
            );
          })}
        </Col>
        <Col lg={6}>
          <form className="shadow p-4">
            <Row >
              <Col xs={12} md={6} lg={6} sm={12} className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </Col>
              <Col xs={12} md={6} lg={6} sm={12} className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </Col>
            </Row>
            <Col xs={12} md={4} lg={12} sm={12} className="mb-4">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Your Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </Col>
            <Col xs={12} md={12} lg={12} sm={12}>
              <textarea
                className="rounded-0 form-control"
                id="exampleTextarea"
                rows="6"
                placeholder="Enter your message here"
                aria-label="Message"
                required
              ></textarea>
            </Col>
            <Button
              className="rounded-1 border-0 bg-main-color d-block mx-auto mt-3"
              variant="secondary"
              size="md"
            >
              Send Message
            </Button>
          </form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
