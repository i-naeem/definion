import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const Search = (props) => {
  const { word } = useParams();
  return (
    <Container>
      <h1>{word}</h1>
    </Container>
  );
};
