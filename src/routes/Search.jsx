import { Card, Container } from 'react-bootstrap';
import { useSearch } from '../hooks/useSearch';
import { useParams } from 'react-router-dom';

export const Search = (props) => {
  const { word } = useParams();
  const { loading, data, error } = useSearch(word);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    console.log(error);
    return <h1>{error.message}</h1>;
  }

  return (
    <Container>
      <Card>
        <Card.Header>
          <h1>{word}</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Card.Header>
      </Card>
    </Container>
  );
};
