---
id: use-timeout
title: useTimeout Hook
sidebar_label: useTimeout
---

You can use this hook to use setTimeout more easily. The hook register the timeout and removes later when the component unmounts.

### Usage

Import the hook passing the callback and delay in ms.

```tsx
import React, { useState } from 'react';
import { useTimeout } from 'dreampact';

export function SomeComponent() {
  const [visible, setIsVisible] = useState(true);

  function vanish() {
    setIsVisible(false);
  }

  useTimeout(vanish, 3000);

  return (
    <>
      {visible && <button>I will vanish in three seconds</button>}
    </>
  )
}
```