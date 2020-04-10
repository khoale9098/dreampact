---
id: use-fullscreen
title: useFullScreen Hook
sidebar_label: useFullScreen
---

You can use this hook to set an element to fullscreen mode. It will only happens if the element and browser has support to it.

### Usage

Import the hook passing the reference of the element.

```tsx
import React, { useRef } from 'react';
import { useFullScreen } from 'dreampact';

export function SomeComponent() {
  const ref = useRef(null);

  const { fullScreen, open, close, toggle } = useFullScreen(ref);

  return (
    <>
      <button click={() => toggle()}>Toggle fullscreen</button>
      <div ref={ref}>I want to be fullscreeeeen</div>
    </>
  )
}
```