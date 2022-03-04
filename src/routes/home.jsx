import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Home = (props) => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');

  const onSearch = (event) => {
    event.preventDefault();
    navigate('/search/' + word);
  };

  return (
    <Container className="p-5 ">
      <section className="mb-3">
        <h1>Definion</h1>
        <p>A simple dictionary to see the defination of a word.</p>
      </section>
      <section className="mb-3">
        <Form onSubmit={onSearch}>
          <InputGroup>
            <Form.Control
              size="lg"
              value={word}
              placeholder="Enter a word such as 'love'"
              onChange={(event) => setWord(event.target.value)}
            />

            <Button type="submit" size="lg">
              Define
            </Button>
          </InputGroup>
        </Form>
      </section>

      <section className="mb-3">
        <Outlet />
      </section>
    </Container>
  );
};
