import React from 'react';
import { Container, Row, Col, Card, ButtonGroup, Button, Badge  } from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
      <Row className="mt-5">
        <Col lg={4} className="mx-auto">
          <Card className="border-0 shadow-lg bg-dark text-white">
            <Card.Header>
              <Badge pill variant="danger circle"> </Badge>
              <Badge pill variant="warning circle mx-2"> </Badge>
              <Badge pill variant="success circle"> </Badge>
              <h1 className="head-number">0821</h1>
            </Card.Header>
            <Card.Body className="p-0">
              <ButtonGroup size="lg" className="w-100">
                <Button className="btn-number btn-dark w-25 py-4">AC</Button>
                <Button className="btn-number btn-dark w-25 py-4">+/-</Button>
                <Button className="btn-number btn-dark w-25 py-4">%</Button>
                <Button className="btn-number btn-warning w-25 py-4">/</Button>
              </ButtonGroup>
              <ButtonGroup size="lg" className="w-100">
                <Button className="btn-number btn-secondary w-25 py-4">7</Button>
                <Button className="btn-number btn-secondary w-25 py-4">8</Button>
                <Button className="btn-number btn-secondary w-25 py-4">9</Button>
                <Button className="btn-number btn-warning w-25 py-4">x</Button>
              </ButtonGroup>
              <ButtonGroup size="lg" className="w-100">
                <Button className="btn-number btn-secondary w-25 py-4">2</Button>
                <Button className="btn-number btn-secondary w-25 py-4">5</Button>
                <Button className="btn-number btn-secondary w-25 py-4">6</Button>
                <Button className="btn-number btn-warning w-25 py-4">-</Button>
              </ButtonGroup>
              <ButtonGroup size="lg" className="w-100">
                <Button className="btn-number btn-secondary w-25 py-4">1</Button>
                <Button className="btn-number btn-secondary w-25 py-4">2</Button>
                <Button className="btn-number btn-secondary w-25 py-4">3</Button>
                <Button className="btn-number btn-warning w-25 py-4">+</Button>
              </ButtonGroup>
              <ButtonGroup size="lg" className="w-100">
                <Button className="btn-number btn-secondary w-50 py-4">0</Button>
                <Button className="btn-number btn-secondary w-25 py-4">.</Button>
                <Button className="btn-number btn-warning w-25 py-4">=</Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
