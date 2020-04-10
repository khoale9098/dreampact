---
id: use-window-scroll
title: useWindowScroll Hook
sidebar_label: useWindowScroll
---

You can use this hook to get the window scroll position.

### Usage

Import the hook to get x and y position.

```tsx
import React from 'react';
import { useWindowScroll } from 'dreampact';

export function SomeComponent() {
  const { x, y } = useWindowScroll();

  return (
    <h1>x position: {x} y position: {y}</h1>
  )
}
```