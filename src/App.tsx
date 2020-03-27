import React from 'react';

import { useIsMobile, useBrowserDetection, useSlug, useClickAway } from './hooks';

function App() {
  const isMobile = useIsMobile(navigator.userAgent || navigator.vendor);
  const browser = useBrowserDetection(navigator.userAgent || navigator.vendor);
  const slug = useSlug("hello dasd as dsa d 1w12world");

  function onClickAway(event: KeyboardEvent) {
    console.log(event.target);
  }

  const clickAwayRef = useClickAway<HTMLSpanElement>(onClickAway);

  return (
    <div className="App">
      <h1>Hi: {isMobile.toString()}</h1>
      <h1>From: {browser}</h1>
      <h1>Slug: {slug}</h1>
      <span ref={clickAwayRef}>Spann</span>
    </div>
  );
}

export default App;
