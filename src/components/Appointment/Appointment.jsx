// for css
import "./Appointment.css";

import Title from "../Title/Title";

import { Button, Col, Row } from "react-bootstrap";

function Appointment({ inputs_array, select_array, btn }) {
  return (
    <section className="py-5 pd-x-5 bg-section">
      <Title
        header="make an appointment"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <form>
        <Row>
          {inputs_array?.map((item, idx) => {
            return (
              <Col xs={12} md={4} lg={4} sm={12} key={idx} className="mb-3">
                <input
                  type={item.type}
                  className="form-control rounded-0"
                  placeholder={item.placeholder}
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </Col>
            );
          })}
          {select_array?.map((item, idx) => {
            return (
              <Col xs={12} md={4} lg={4} sm={12} className="mb-3" key={idx}>
                <select
                  className="form-select rounded-0"
                  id="exampleSelect"
                  name="exampleSelect"
                  required
                >
                  <option value="" disabled>
                    {item.select_title}
                  </option>
                  {item.options?.map((i, idx) => {
                    return (
                      <option key={idx} defaultValue={i.value}>
                        {i.option}
                      </option>
                    );
                  })}
                </select>
              </Col>
            );
          })}
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
         <Col>
         <Button
            className="rounded-1 border-0 bg-main-color d-block mx-auto mt-3"
            variant="secondary"
            size="md"
          >
            {btn}
          </Button>
         </Col>
        </Row>
      </form>
    </section>
  );
}

export default Appointment;
