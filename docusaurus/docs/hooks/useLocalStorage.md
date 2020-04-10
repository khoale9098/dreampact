---
id: use-local-storage
title: useLocalStorage Hook
sidebar_label: useLocalStorage
---

You can use this hook to wortk with local storage more easily.

### Usage

Just import the hook passing the key you want to get the value, and as an optional param, you can pass the initial value for the key in case that doesn't exist in local storage. As response if doesn't exist, the hook will write to local storage the initial value.

You can also pass the response type to the hook as an optional param.

The hook returns the value, a function to set a new value for the key and another function to delete the key from local storage.

```tsx
import React from 'react';
import { useLocalStorage } from 'dreampact';

type ThemeType = {
  color: string;
  border: 'none'|'solid';
}

export function SomeComponent() {
  // If theme doesn't exist in local storage, the second - and optional - param will be written and returned.
  const [theme, setTheme, deleteTheme] = useLocalStorage<ThemeType>('theme', {
    color: '#fff',
    border: 'none'
  });

  return (
    <button onClick={() => deleteTheme()}>Delete theme</button>
  )
}
```

Also, there are two helper functions in the hook to give you more flexibility if you don't want to start with the hook. They are **writeStorage** and **removeFromStorage**.

```tsx
import React, { useState } from 'react';
import { writeStorage, removeFromStorage } from 'dreampact';

export function SomeComponent() {
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <button onClick={() => writeStorage('name', name)}>Save name</button>
      <button onClick={() => removeFromStorage('name')}>Delete name</button>
    </>
  )
}

```