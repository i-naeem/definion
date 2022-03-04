import { Container, Form, Button, InputGroup } from 'react-bootstrap';

export const Home = (props) => {
  return (
    <Container className="p-5">
      <section>
        <h1>Definion</h1>
        <p>A simple dictionary to see the defination of a word.</p>
      </section>
      <Form>
        <InputGroup>
          <Form.Control placeholder="Search" size="lg" />
          <Button type="submit" size="lg">
            Define
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};
