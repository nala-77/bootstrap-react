// for css
import Title from "../Title/Title";
import "./Pricing.css";

import { Button, Card, Col, Row } from "react-bootstrap";

function Pricing({ pricingCards }) {
  return (
    <section className="py-5 pd-x-5">
      <Title
        header="pricing"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Row className="">
        {pricingCards.map((item, idx) => {
          return (
            <Col lg={3} md={4} sm={6} key={idx}>
              <Card
                className={
                  idx === pricingCards.length - 1
                    ? "text-center border-0 mb-2 price-hover after position-relative overflow-hidden"
                    : "text-center border-0 mb-2 price-hover"
                }
              >
                <Card.Header className="NA-light-gray border-0 py-3  price-title">
                  {item.header}
                </Card.Header>
                <Card.Body>
                  <Card.Title className="fs-5 text-secondary">
                    <span className="fs-3 text-dark">
                      <sup>$</sup>
                      {item.price}{" "}
                    </span>
                    /month
                  </Card.Title>
                  <Card.Text>
                    <ul className="list-unstyled text-dark">
                      {item.list.map((i, idx) => {
                        return (
                          <li
                            key={idx}
                            className={
                              i.class === "linethrough"
                                ? "text-decoration-line-through text-secondary mb-3"
                                : "text-dark fw-bold mb-3"
                            }
                          >
                            {i.li}
                          </li>
                        );
                      })}
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted NA-light-gray border-0 py-3">
                  <Button
                    className="rounded-1 border-0 bg-main-color nav-btn"
                    variant="secondary"
                    size="sm"
                  >
                    Buy Now
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Pricing;
