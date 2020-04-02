---
id: use-is-mobile
title: useIsMobile Hook
sidebar_label: useIsMobile
---

You can use this hook to check if is mobile or a specific mobile, like apple or android.

### Usage

Just import the hook and pass the agent as param.

```tsx
import React from 'react';
import { useIsMobile } from 'dreampact';

export function SomeComponent() {

  const { isAnyMobile, isPhone, isTablet, apple: { phone: iPhone } } = useIsMobile(navigator.userAgent);

  return (
    <>
      <span>Am i in mobile? {isAnyMobile.toString()}.</span>
      <span>Am i in a tablet? {isTablet.toString()}</span>
      <span>Am i in a cellphone? {isPhone.toString()}</span>
      <span>Am i in a iPhone? {iPhone.toString()}</span>
    </>
  )
}
```

All types that you can check are:

```
{
  apple: {
    phone: boolean;
    ipod: boolean;
    tablet: boolean;
    device: boolean;
  };
  amazon: {
    phone: boolean;
    tablet: boolean;
    device: boolean;
  };
  android: {
    phone: boolean;
    tablet: boolean;
    device: boolean;
  };
  windows: {
    phone: boolean;
    tablet: boolean;
    device: boolean;
  };
  other: {
    blackberry: boolean;
    blackberry10: boolean;
    opera: boolean;
    firefox: boolean;
    chrome: boolean;
    device: boolean;
  };
  isPhone: boolean;
  isTablet: boolean;
  isAnyMobile: boolean;
}
```