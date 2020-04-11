import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from './components';

export * from './hooks';
export * from './components';

function App() {
  return (
    <Row lg={50} className="hello-world hi" onClick={() => console.log('row')}>
      <Col className="hi" onClick={() => console.log('hi')}>
        hi
      </Col>
      <Col>hi</Col>
    </Row>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
