---
id: use-interval
title: useInterval Hook
sidebar_label: useInterval
---

You can use this hook to use setInterval more easily. The hook register the interval and removes later when the component unmounts.

### Usage

Import the hook passing the callback and delay in ms.

```tsx
import React, { useState } from 'react';
import { useInterval } from 'dreampact';

export function SomeComponent() {
  const [visible, setIsVisible] = useState(true);

  function vanish() {
    setIsVisible(!visible);
  }

  useInterval(vanish, 3000);

  return (
    <>
      {visible && <button>I will vanish in three seconds and return again in three seconds</button>}
    </>
  )
}
```