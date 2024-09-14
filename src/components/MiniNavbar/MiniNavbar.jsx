import { Container, Navbar } from "react-bootstrap";

// for css
import "./MiniNavbar.css";

// for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MiniNavbar({ data }) {
  return (
    <>
      <Navbar className="bg-main-color pd-x-5 d-none d-sm-block">
        <Container className="m-0 p-0 wdth-fullScreen">
          <Navbar.Collapse className="justify-content-between">
            {data.map((item, idx) => {
              return (
                <Navbar.Text key={idx} className="py-0">
                  <FontAwesomeIcon icon={item.icon} className="text-light" />{" "}
                  <a
                    className="text-decoration-none text-light link-hover-effect"
                    href={`#${item.link}`}
                  >
                    {item.text}
                  </a>
                </Navbar.Text>
              );
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MiniNavbar;
