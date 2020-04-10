---
id: use-event-listener
title: useEventListener Hook
sidebar_label: useEventListener
---

You can use this hook to create event listener more easily. The hook register the event and removes later when the component unmounts.

### Usage

Import the hook passing the event name and handler and an optional element (that is window by default).

```tsx
import React from 'react';
import { useEventListener } from 'dreampact';

export function SomeComponent() {
  function onEvent(event: Event) {
    console.log(event);
  }

  useEventListener('someEventName', onEvent);

  return (
    <h1>I have nothing to do with this</h1>
  )
}
```

Using with specific element

```tsx
import React, { useRef } from 'react';
import { useEventListener } from 'dreampact';

export function SomeComponent() {
  const ref = useRef(null);

  function onEvent(event: Event) {
    console.log(event);
  }

  useEventListener('someEventName', onEvent, ref.current);

  return (
    <h1 ref={ref}>Now i'm part of it</h1>
  )
}
```