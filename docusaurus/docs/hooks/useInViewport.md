---
id: use-in-viewport
title: useInViewport Hook
sidebar_label: useInViewport
---

You can use this hook to detect if element is visible on screen.

### Usage

Just import the hook and assign to a variable. The response will be a boolean that says if element is on viewport, and a reference to use in desired element to be checked.

You can also pass an optional element type to the function.

After that, just use React hook **useEffect** passing the boolean as dependence to take any actions that you want.

```tsx
import React, { useEffect } from 'react';
import { useInViewport } from './hooks';

export function SomeComponent() {
  const [isInViewport, reference] = useInViewport<HTMLSpanElement>();

  useEffect(() => {
    console.log('Element is on screen ? ', isInViewport);
  }, [isInViewport]);

  return (
    <span ref={reference}>I will be the experiment</span>
  )
}
```