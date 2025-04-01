import { Card, Row, Col, Container } from 'react-bootstrap';
import fantasy from '../data/fantasy.json';

const AllTheBooks = () => (
  <Container fluid className="py-4">
    <h2 className="text-center mb-4">Fantasy</h2>
    <Row className="justify-content-center">
      {fantasy.map(book => (
        <Col key={book.asin} xs={10} sm={6} md={4} lg={3} xl={2} className="mb-4 d-flex justify-content-center">
          <Card style={{ width: '100%', maxWidth: '200px' }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title style={{ fontSize: '1rem' }}>{book.title}</Card.Title>
              <Card.Text>Prezzo: ${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default AllTheBooks;