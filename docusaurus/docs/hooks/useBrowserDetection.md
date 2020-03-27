---
id: use-browser-detection
title: useBrowserDetection Hook
sidebar_label: useBrowserDetection
---

It's usefull when you need to make actions based on user's browser.

### Usage

You just need to import the hook and pass user agent as parameter. The response will be passed as string.

```tsx
import React from 'react';
import { useBrowserDetection } from '@dreampact/core';

export function SomeComponent() {
  const myBrowser = useBrowserDetection(navigator.userAgent || navigator.vendor);

  return <h1>Hi, my browser is {myBrowser}</h1>
}
```