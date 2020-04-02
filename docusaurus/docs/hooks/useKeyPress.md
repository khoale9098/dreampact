---
id: use-key-press
title: useKeyPress Hook
sidebar_label: useKeyPress
---

You can use this hook to detect key press.

### Usage

Just import the hook passing the key name as param, like "escape" or "a", etc. Then use React Hook useEffect to take actions based on key press.

```tsx
import React, { useEffect } from 'react';
import { useKeyPress } from './hooks';

export function SomeComponent() {
  const isEscapePressed = useKeyPress('escape');

  useEffect(() => {
    if(isEscapePressed) {
      console.log("Let's do some actions");
    }
  }, [isEscapePressed]);

  return (
    <span>I'm not useful for this doc :(</span>
  )
}
```