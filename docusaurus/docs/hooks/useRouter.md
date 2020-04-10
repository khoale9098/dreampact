---
id: use-router
title: useRouter Hook
sidebar_label: useRouter
---

You can use this hook to work with react router more easily.

### Usage

Just import the hook to get the helper functions and/or query and route params.

Optionally you can pass the param type to the hook.

```tsx
import React from 'react';
import { useRouter } from 'dreampact';

type SomeParam = {
  name: string;
  email: string;
}

export function SomeComponent() {
  const {
    push,
    replace,
    pathname,
    params: { name, email },
    query,
    match,
    location,
    history
  } = useRouter<SomeParam>();

  return (
    <>
      <h1>Your name is {name} and your email is {email}</h1>
      <button onClick={() => push('/foo')}>Change current route</button>
    </>
  )
}
```