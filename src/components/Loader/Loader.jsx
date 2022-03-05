import { Image, Container } from 'react-bootstrap';

export const Loader = (props) => {
  return (
    <Container className="text-center">
      <Image
        src="/src/assets/book-loading.gif"
        width="64"
        height="64"
        alt="Searching for your word..."
      />
    </Container>
  );
};
