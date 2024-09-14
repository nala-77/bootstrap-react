// for css
import "./AccordionSection.css";

import Title from "../Title/Title";
import { Accordion } from "react-bootstrap";

function AccordionSection({ accordion_array }) {
  return (
    <section className="py-5 pd-x-5 bg-section ">
      <Title
        header="frequently asked questions"
        desc="Necssitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />

      <Accordion defaultActiveKey="0" flush>
        {accordion_array.map((item, idx) => {
          return (
            <Accordion.Item className="border mb-2" eventKey={idx} key={idx}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>
                {item.answer}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </section>
  );
}

export default AccordionSection;
