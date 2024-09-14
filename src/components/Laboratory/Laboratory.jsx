// for css
import "./Laboratory.css";

import Title from "../Title/Title";

import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Laboratory({ img, title, desc, labInfo }) {
  return (
    <section className="py-5 pd-x-5">
      <Row className="gap-5">
        <Col lg={6} md={12} sm={12}>
          <img src={img} alt="lab" className="w-100 h-100 object-fit-cover" />
        </Col>
        <Col className="NA-edit" lg={5} md={12} sm={12}>
          <Title header={title} desc={desc} />
          <div className="pr-3">
            {labInfo?.map((item, idx) => {
              return (
                <div key={idx} className="d-flex gap-4 align-items-start mb-4">
                  <div className="edit d-flex justify-content-center align-items-center shadow-sm">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className=" NA-text-main-color fs-4"
                    />
                  </div>
                  <div>
                    <h3 className="fw-bolder fs-6 NA-text-gray">
                      {item.title}
                    </h3>
                    <p className="NA-laboratory-fs">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default Laboratory;
