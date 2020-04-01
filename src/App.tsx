import React, { useEffect } from 'react';
import { useInViewport, useKeyPress } from './hooks';

function App() {
  const [isInViewport, reference] = useInViewport<HTMLSpanElement>();

  const keyPressed = useKeyPress('Escape');

  useEffect(() => {
    console.log('is key pressed', keyPressed);
  }, [keyPressed]);

  useEffect(() => {
    console.log('Element is on screen ? ', isInViewport);
  }, [isInViewport]);

  return (
    <div
      style={{
        height: 5000,
      }}
    >
      <span ref={reference}>Am i on screen?</span>
    </div>
  );
}

export default App;
