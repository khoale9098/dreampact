---
id: use-click-away
title: useClickAway Hook
sidebar_label: useClickAway
---

You can use this hook to take action when user touches anything else besides the target element.

### Usage

The hook returns a reference to be used in the component that will check the away click.

```tsx
import React from 'react';
import { useClickAway } from 'dreampact';

export function SomeComponent() {
  function onClickAway(event: KeyboardEvent) {
    console.log(event.target);
  }

  const reference = useClickAway<HTMLSpanElement>(onClickAway);

  return (
    <>
      <button>Click me, will trigger onClickAway function</button>
      <span ref={reference}>Actually, you can click really anything else besides me to trigger the function.</span>
    </>
  )
}
```