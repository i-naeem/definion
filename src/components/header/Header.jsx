import { Navbar, NavbarBrand, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Container>
          <NavbarBrand as={Link} to="/">
            Definion
          </NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
};
