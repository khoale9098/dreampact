---
id: use-browser-detection
title: useBrowserDetection Hook
sidebar_label: useBrowserDetection
---

It's usefull when you need to make actions based on user's browser.

### Usage

You just need to import the hook and pass user agent as parameter.

```tsx
import React from 'react';
import { useBrowserDetection } from '@dreampact/core';

export function SomeComponent() {
  const { browser: { name, version } } = useBrowserDetection(navigator.userAgent);

  return <h1>Hi, my browser is { name } and the version is { version }.</h1>
}
```

The hook return other usefull informations. An example of output is:

```json
{
  "browser": {
    "name": "Internet Explorer",
    "version": "11.0"
  },
  "os": {
    "name": "Windows",
    "version": "NT 6.3",
    "versionName": "8.1"
  },
  "platform": {
    "type": "desktop"
  },
  "engine": {
    "name": "Trident",
    "version": "7.0"
  }
}
```