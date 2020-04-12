import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Button, CssReset, Container, Tooltip, Modal } from './components';

export * from './hooks';
export * from './components';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container style={{ height: '5000px' }}>
      <Row>
        <Col>
          <Button>hello</Button>
        </Col>
        <Col>
          <Tooltip title="Hello World do tooltip" position="right">
            <Button variant="dark" elevate onClick={() => setIsOpen(true)}>
              Abrir modal
            </Button>
          </Tooltip>
        </Col>
      </Row>
      <Modal title="Hello World From Modal" isOpen={isOpen} setIsOpen={setIsOpen} size="xl" lockScroll>
        Hello world
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
