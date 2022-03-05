import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Brand } from '../brand/Brand';

export const Header = (props) => {
  return (
    <header>
      <Navbar variant="light" bg="light">
        <Container>
          <Brand />
        </Container>
      </Navbar>
    </header>
  );
};
