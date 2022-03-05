import Alert from 'react-bootstrap/Alert';

export const Error = ({ message }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>No Definitions Found!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};
