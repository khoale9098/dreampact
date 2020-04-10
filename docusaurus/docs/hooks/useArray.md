---
id: use-array
title: useArray Hook
sidebar_label: useArray
---

You can use this hook to work with array more easily.

### Usage

```tsx
import React from 'react';
import { useArray } from 'dreampact';

type Product = {
  id: number;
  name: string;
}

export function SomeComponent() {
  const [
    productList,
    setProductList,
    addToProductList,
    clearProductList,
    removeProductByIndex
  ] = useArray<Product>([]);

  function removeFirstItem() {
    removeProductByIndex(0);
  }

  return (
    <button onClick={() => removeFirstItem()}>Remove first product</button>
    <button onClick={() => clearProductList()}>Clear all products</button>
  )
}
```