---
id: use-document-title
title: useDocumentTitle Hook
sidebar_label: useDocumentTitle
---

You can use this hook to set or get the document title.

### Usage

Import the hook passing an optional new document title - **null or undefined doesn't change document title** -.

```tsx
import React from 'react';
import { useDocumentTitle } from 'dreampact';

export function SomeComponent() {
  const { setDocumentTitle, getDocumentTitle } = useDocumentTitle('hi new documet title');

  return (
    <>
      <h1>My document title is {getDocumentTitle()}</h1>
      <button onClick={() => setDocumentTitle('Button changing document title')}>Change title</button>
    </>
  )
}
```