---
id: use-window-size
title: useWindowSize Hook
sidebar_label: useWindowSize
---

You can use this hook to get the window width and height.

### Usage

Import the hook to get width and height.

Optionally you can pass an initial width and height to act like a fallback to server side.

```tsx
import React from 'react';
import { useWindowSize } from 'dreampact';

export function SomeComponent() {
  const { width, height } = useWindowSize();

  return (
    <h1>Width: {width} height: {height}</h1>
  )
}
```