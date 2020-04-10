---
id: use-script
title: useScript Hook
sidebar_label: useScript
---

You can use this hook to append a script to body.

### Usage

Just import the hook passing the src link.

```tsx
import React from 'react';
import { useScript } from 'dreampact';

export function SomeComponent() {
  const src = "some http script src"; 
  const [isFooScriptLoaded, hasError] = useScript(src);

  return (
    <span>Is script loaded ? { isFooScriptLoaded ? "yes" : "no" }.</span>
  )
}
```