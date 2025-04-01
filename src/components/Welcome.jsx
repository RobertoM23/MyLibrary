import { Alert, Container } from 'react-bootstrap';

const Welcome = () => (
  <Container className="my-4">
    <Alert variant="success">
      <Alert.Heading>Benvenuto su EpiBooks!</Alert.Heading>
      <p>Scopri il nostro fantastico catalogo di libri fantasy e altro ancora!</p>
    </Alert>
  </Container>
);

export default Welcome;