import React from 'react';
import ReactDOM from 'react-dom';

import { Flex, CssReset, Accordion, AccordionGroup } from './components';

export * from './hooks';
export * from './components';

function App() {
  return (
    <Flex padding="30px">
      <AccordionGroup>
        <Accordion title="1 hi" content="hello world" />
        <Accordion title="2 hi" content="hello world" />
        <Accordion title="3 hi" content="hello world" />
      </AccordionGroup>
      <CssReset />
    </Flex>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
