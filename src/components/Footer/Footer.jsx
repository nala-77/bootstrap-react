import { Col, Container, Row } from "react-bootstrap";

// for css
import "./Footer.css";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer({ main_title, address, details, icons, info }) {
  return (
    <>
      <Container className="text-secondary m-0 pd-x-5 pt-5 pb-3 footer bg-section ">
        <Row className="justify-content-between NA-gap border-bottom pb-2">
          <Col xs={12} md={4} lg={2} sm={12} className="p-sm-0">
            <h5 className="NA-text-gray fw-bolder text-capitalize">
              {main_title}
            </h5>
            <p>{address}</p>
            <ul className="list-unstyled">
              {details?.map((item, idx) => {
                return (
                  <li key={idx} className="NA-text-gray fw-bolder">
                    {item.name}:{" "}
                    <a
                      className="text-secondary text-decoration-none fw-normal"
                      href={`#${item.to}`}
                    >
                      {item.link}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Row className="gap-2 gap-sm-1 mb-3  m-0">
              {icons?.map((item, idx) => {
                return (
                  <div
                    className="icon-parent p-0 d-flex justify-content-center align-items-center rounded-circle border"
                    key={idx}
                  >
                    <a href={`#${item.link}`} className="text-secondary">
                      <FontAwesomeIcon className="icon" icon={item.icon} />
                    </a>
                  </div>
                );
              })}
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-between">
              {info?.map((item, idx) => {
                return (
                  <Col xs={12} sm={6} className="mb-sm-3 NA-w" key={idx} md={6}>
                    <h5 className="fw-bold NA-text-gray text-capitalize">
                      {item.title}
                    </h5>
                    <ul className="list-unstyled">
                      {item.list.map((list_item, idx) => {
                        return (
                          <li className="mb-2" key={idx}>
                            <a
                              className="text-decoration-none text-secondary text-capitalize"
                              href={`#${list_item.link}`}
                            >
                              {list_item.li}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <div className="text-center mt-4 text-capitalize">
          <p className="m-2">
            &copy; 2024{" "}
            <span className="text-capitalize fw-bolder NA-text-gray">{`${main_title}`}</span>{" "}
            All rights reserved.
          </p>
          <p className="m-0">
            designed by{" "}
            <span className="NA-text-main-color">BootstrapMade</span>
          </p>
        </div>
      </Container>
    </>
  );
}

export default Footer;
