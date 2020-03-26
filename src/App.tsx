import React from 'react';

import { useIsMobile, useBrowserDetection, useSlug } from './hooks';

function App() {
  const isMobile = useIsMobile(navigator.userAgent || navigator.vendor);
  const browser = useBrowserDetection(navigator.userAgent || navigator.vendor);
  const slug = useSlug("hello dasd as dsa d 1w12world");

  return (
    <div className="App">
      <h1>Hi: {isMobile.toString()}</h1>
      <h1>From: {browser}</h1>
      <h1>Slug: {slug}</h1>
    </div>
  );
}

export default App;
