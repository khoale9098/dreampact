import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Button, CssReset, Container, Tooltip, Modal, Text } from './components';

export * from './hooks';
export * from './components';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container style={{ height: '5000px' }}>
      <Row>
        <Col>
          <Text text="Hello world my friend" as="h1" textColor="primary" bold italic transform="capitalize" />
          <Text text="Hello world my friend" as="h2" textColor="dark" />
          <Text text="Hello world my friend" as="h3" textColor="danger" />
          <Text text="Hello world my friend" as="h4" textColor="warning" />
          <Text text="Hello world my friend" as="h5" textColor="success" />
          <Text text="Hello world my friend" as="h6" textColor="info" />
          <Text text="Hello world my friend" as="p" textColor="secondary" />
        </Col>
        <Col>
          <Tooltip title="Hello World do tooltip" position="right">
            <Button variant="dark" elevate onClick={() => setIsOpen(true)}>
              Abrir modal
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Modal
        title="Hello World From Modal"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        size="xl"
        lockBodyScroll
        scrollable
        scrollableOn="modalBody"
      >
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
        Hello world <br />
      </Modal>
      <CssReset />
    </Container>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
