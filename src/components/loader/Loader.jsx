import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export const Loader = (props) => {
  return (
    <Container className="text-center">
      <Image
        width="64"
        height="64"
        src="/assets/book-loading.gif"
        alt="Searching for your word..."
      />
    </Container>
  );
};
