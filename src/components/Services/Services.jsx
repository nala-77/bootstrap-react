// for css
import "./Services.css";
import Title from "../Title/Title";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services({ servicesCards }) {
  return (
    <section id="services" className="py-5 pd-x-5 services">
      <Title
        header="services"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Row className="justify-content-between gap-2">
        {servicesCards?.map((item, idx) => {
          return (
            <Col
              xs={12}
              md={4}
              lg={3}
              sm={5}
              xl={3}
              key={idx}
              className="NA-text-gray px-2 title-edit"
            >
              <div className="edit-circle d-flex justify-content-center mb-3 mx-auto rounded-circle align-items-center shadow">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="NA-text-main-color fs-4"
                />
              </div>
              <Title header={item.title} desc={item.desc} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Services;
