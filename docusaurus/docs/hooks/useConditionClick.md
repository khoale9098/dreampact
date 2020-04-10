---
id: use-condition-click
title: useConditionClick Hook
sidebar_label: useConditionClick
---

You can use this hook to create a click condition based in some conditions.

### Usage

Just import the hook passing the callback when the condition meets and all conditions separated by comma.

```tsx
import React from 'react';
import { useConditionClick, CLICK_TYPES, ConditionClickDetails } from 'dreampact';

export function SomeComponent() {
  function onConditionMeets(event: React.MouseEvent, details: ConditionClickDetails) {
    console.log(details.x, details.y);
  }

  const handleConditionClick = useConditionClick(onConditionMeets, CLICK_TYPES.alt, CLICK_TYPES.triple);

  return (
    <button onClick={handleConditionClick}>Condition click</button>
  )
}
```