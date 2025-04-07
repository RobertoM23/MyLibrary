import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import fantasy from "./data/fantasy.json";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [selectedAsin, setSelectedAsin] = useState(null);

  return (
    <>
      <MyNav />
      <Welcome />
      <Container fluid className="mt-4">
        <Row>
          <Col md={8}>
            <BookList books={fantasy} onBookSelect={setSelectedAsin} selectedAsin={selectedAsin} />
          </Col>
          <Col md={4}>
            {selectedAsin && <CommentArea asin={selectedAsin} />}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;