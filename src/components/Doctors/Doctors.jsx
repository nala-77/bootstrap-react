// for css
import "./Doctors.css";

import Title from "../Title/Title";
import { Card, Col, Row } from "react-bootstrap";

function Doctors({ doctors }) {
  return (
    <section id="doctors" className="py-5 pd-x-5 bg-section ">
      <Title
        header="doctors"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Row className="">
        {doctors.map((item, idx) => {
          return (
            <Col lg={3} md={4} sm={6} key={idx}>
              <Card className="mb-3 p-0 border-0 rounded-0 NA-text-gray shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="w-100 rounded-0"
                />
                <Card.Body>
                  <Card.Title className="fw-bolder text-capitalize">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-capitalize">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Doctors;
