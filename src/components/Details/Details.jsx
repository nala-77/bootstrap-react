// for css
import { Col, Row } from "react-bootstrap";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Details({ detailsCards }) {
  return (
    <section className="py-5 pd-x-5">
      <Row className="justify-content-between gap-2">
        {detailsCards?.map((item, idx) => {
          return (
            <Col
              xs={12}
              md={3}
              lg={3}
              sm={5}
              key={idx}
              className="NA-text-gray shadow details-card py-5 px-4"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="NA-text-main-color fs-1 mb-3"
              />
              <h3 className="fw-bolder fs-5 text-capitalize ">{item.title}</h3>
              <p>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Details;
