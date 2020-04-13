---
id: use-lock-body-scroll
title: useLockBodyScroll Hook
sidebar_label: useLockBodyScroll
---

You can use this hook to block body scroll more easily.

### Usage

Just import the hook to get helper lockBodyScroll and unlockBodyScroll function. Optionally you can pass if you want to lock or not body scroll in hook call.

```tsx
import React from 'react';
import { useLockBodyScroll } from 'dreampact';

export function SomeComponent() {
  const { lockBodyScroll, unlockBodyScroll } = useLockBodyScroll(true);

  return (
    <>
      <button onClick={() => lockBodyScroll()}>Lock body Scroll</button>
      <button onClick={() => unlockBodyScroll()}>Unlock body Scroll</button>
      
      <div style={{ height: "5000px" }}>
        Some random content
      </div>
    </>
  )
}
```