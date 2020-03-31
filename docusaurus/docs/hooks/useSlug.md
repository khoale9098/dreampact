---
id: use-slug
title: useSlug Hook
sidebar_label: useSlug
---

You can use this hook to create a slug a new slug based on any given string.

### Usage

Just import the hook and pass the string to be transformed in a slug.

A few characters will be transformed and sanatized, such as ãåăæçèéë and etc.

```tsx
import React from 'react';
import { useSlug } from '@dreampact/core';

export function SomeComponent() {
  const originalText = "Hi, my name is ãåăæçèé"; 
  const newSlug = useSlug(originalText);

  return (
    <>
      <span>Original text: {originalText}.</span>
      <span>New slug: {newSlug}.</span>
    </>
  )
}
```