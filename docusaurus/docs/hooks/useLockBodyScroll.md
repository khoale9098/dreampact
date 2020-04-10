---
id: use-lock-body-scroll
title: useLockBodyScroll Hook
sidebar_label: useLockBodyScroll
---

You can use this hook to block body scroll more easily.

### Usage

Just import the hook to lock body scroll.

```tsx
import React from 'react';
import { useLockBodyScroll } from 'dreampact';

export function SomeComponent() {
  useLockBodyScroll();

  return (
    <div style={{ height: "5000px" }}>
      Some random content
    </div>
  )
}
```