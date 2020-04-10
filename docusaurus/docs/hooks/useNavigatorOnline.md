---
id: use-navigator-online
title: useNavigatorOnline Hook
sidebar_label: useNavigatorOnline
---

You can use this hook to take actions based in browser internet connection.

### Usage

Just import the hook to check if is on or not the connection. Optionally, you can pass two callbacks to the hook, one to take actions when the navigator gets online and other when the navigator gets offline.

```tsx
import React from 'react';
import { useNavigatorOnline } from 'dreampact';

export function SomeComponent() {
  function onOnline() {
    console.log('has connection again');
  }

  function onOffline() {
    console.log('connection lost again');
  }

  const { online } = useNavigatorOnline({ onOnline, onOffline });

  return (
    <h1>
      Do i have a connection ? { online ? "yes" : "no" }.
    </h1>
  )
}
```