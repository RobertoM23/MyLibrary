import { Card, Row, Col, Container } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';

const AllTheBooks = () => (
  <Container className="my-4">
    <Row>
      {fantasy.map(book => (
        <Col key={book.asin} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>Prezzo: ${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;