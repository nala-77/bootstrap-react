// for css
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";
import "./Department.css";

import React from "react";

function Department({ tabs }) {
  return (
    <section id="departments" className="d-flex py-5 pd-x-5 justify-content-between">
      <Tab.Container id="left-tabs-example" defaultActiveKey="Ophthalmologists">
        <Row>
          <Col sm={12} md={3}>
            <Nav variant="pills" className="NA-for-edit pb-3">
              {tabs?.map((tab, index) => (
                <Nav.Item key={index}>
                  <Nav.Link
                    eventKey={tab.eventKey}
                    className="rounded-0 fw-bold NA-text-gray"
                  >
                    {tab.link}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={12} md={9}>
            <Tab.Content className="w-100">
              {tabs?.map((tab, idx) => (
                <Tab.Pane key={idx} eventKey={tab.eventKey}>
                  <div className="d-flex flex-column flex-lg-row gap-5 ms-3 justify-content-between flex-lg-row-reverse">
                    <img
                      src={tab.img}
                      alt="department"
                      className="NA-img-wdth NA-height object-fit-cover"
                    />
                    <div className="wdth-tab-content">
                      <h4 className="mb-4 fs-3 text-capitalize NA-text-gray fw-bolder">
                        {tab.title}
                      </h4>
                      <p className="fst-italic">{tab.descOne}</p>
                      <p>{tab.descTwo}</p>
                    </div>
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
}

export default Department;
