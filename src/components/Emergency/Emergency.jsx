// for css
import { Button } from "react-bootstrap";
import "./Emergency.css";

import React from "react";

function Emergency({ heading, paraghraph, btn }) {
  return (
    <section className="py-5 pd-x-5 bg-main-color text-white d-flex justify-content-center align-items-center flex-column text-center">
      <div className="NA-wdth">
        <h2 className="text-capitalize fw-bolder">{heading}</h2>
        <p className="my-4 fw-bold">{paraghraph}</p>
        <Button
          className="py-2 rounded-1 d-block mx-auto mt-3 on-hover"
          variant="outline-light"
          size="md"
        >
          {btn}
        </Button>
      </div>
    </section>
  );
}

export default Emergency;
