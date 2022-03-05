import { Image, Container } from 'react-bootstrap';

export const Loader = (props) => {
  return (
    <Container className="text-center">
      <Image
        width="64"
        height="64"
        alt="Searching for your word..."
        src="/src/assets/book-loading.gif"
      />
    </Container>
  );
};
