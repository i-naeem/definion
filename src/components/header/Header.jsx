import { Navbar, NavbarBrand, Container } from 'react-bootstrap';

export const Header = (props) => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Container>
          <NavbarBrand>Definion</NavbarBrand>
        </Container>
      </Navbar>
    </header>
  );
};
