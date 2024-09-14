// for css
import "./MiniCards.css";

import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MiniCards({ miniCard }) {
  return (
    <section className="py-5 pd-x-5">
      <Row className="justify-content-between gap-2">
        {miniCard?.map((item, idx) => {
          return (
            <Col
              xs={12}
              md={4}
              lg={4}
              sm={4}
              key={idx}
              className="NA-text-gray shadow-sm details-card px-sm-1 py-4 px-4 align-items-center justify-content-center gap-3 d-flex"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="NA-text-main-color NA-icon-fs mb-3"
              />
              <div>
                <h3 className="fw-bolder fs-2 text-capitalize ">
                  {item.title}
                </h3>
                <p className="text-capitalize">{item.desc}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default MiniCards;
