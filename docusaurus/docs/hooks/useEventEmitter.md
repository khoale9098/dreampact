---
id: use-event-emitter
title: useEventEmitter Hook
sidebar_label: useEventEmitter
---

You can use this hook to communicate your components with events.

### Usage

First, you import the useEventEmitter hook, that you can also pass an optional type of event response data.

Then, you can use the first hook, to subscribe to event emitter passing a callback.

Any component that get the hook as param, can either subscribe or emit data.

```tsx
import React from 'react';
import { useEventEmitter } from 'dreampact';

type SomeType = {
  message: string
  data: any
}

export function SomeComponent() {
  // First we create the event emitter reference.
  const eventEmitter = useEventEmitter<SomeType>();

  // Then, we can create a callback when an event is emitted.
  function onNewDataEmitted(data: SomeType) {
    console.log(data);
  }

  // Then we subscribe to the event emitter
  eventEmitter.useSubscription(onNewDataEmitted);

  return (
    <SomeOtherComponent emitter={eventEmitter} />
  )
}

/// Some other component
import React, { useState } from 'react';
import { useEventEmitter } from 'dreampact';

export function SomeOtherComponent({ emitter }: { emitter: EventEmitter<SomeType>}) {
  const [ message, setMessage ] = useState("");
  const [ data, setData ] = useState(null);

  function emitData() {
    emitter.emit({
      message,
      data
    })
  }

  return (
    <>
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <textarea value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={() => emitData()}>Emit event</button>
    </>
  )
}
```