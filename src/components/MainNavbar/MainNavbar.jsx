// css
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./MainNavbar.css";

const MainNavbar = ({
  brand,
  navItems,
  btn_title,
  dropdown_name,
  dropdown,
}) => {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary py-xl-3 py-lg-3 py-md-3 py-sm-3 pd-x-5 sticky-top mainNavbar"
        >
          <Container fluid className="p-0">
            <Navbar.Brand className="logo-parent m-0" href="#">
              <img className="w-100" src={brand?.img} alt={brand?.name} />
            </Navbar.Brand>
            <div className="d-flex gap-2 for-flex-reverse">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    className="text-uppercase"
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                  >
                    {brand?.name}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {navItems?.map((item, index) => {
                      return (
                        <Nav.Link
                          className="text-uppercase"
                          key={index}
                          href={`#${item.id}`}
                        >
                          {item.link}
                        </Nav.Link>
                      );
                    })}
                    <NavDropdown
                      title={dropdown_name}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      {dropdown?.map((item, index) => {
                        return (
                          <NavDropdown.Item key={index} href={`#${item.link}`}>
                            {item.name}
                          </NavDropdown.Item>
                        );
                      })}
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              <Button
                className="rounded-1 border-0 bg-main-color nav-btn"
                variant="secondary"
                size="sm"
              >
                {btn_title}
              </Button>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MainNavbar;
