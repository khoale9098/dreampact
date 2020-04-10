import { useCallback, useRef, useEffect } from 'react';

import { CLICK_TYPES, ClickConditionEvent } from './types';

const isClickOfType = (e: React.MouseEvent, types: CLICK_TYPES[]) => {
  let i = 0,
    j;

  for (; i < types.length; i++) {
    const type = types[i],
      ors = type.split('|');

    if (ors.length > 1) {
      let orSatisfied = true;

      for (j = 0; j < ors.length; j++) {
        const or = ors[j];

        if (isClickOfType(e, [or as CLICK_TYPES]) === true) {
          orSatisfied = true;
          break;
        } else {
          orSatisfied = false;
        }
      }

      if (orSatisfied === false) {
        return false;
      }
    } else {
      const props = type.split('+');

      for (j = 0; j < props.length; j++) {
        const [propName, propValue] = props[j].split('=');

        if (propValue !== void 0) {
          if (String((e as any)[propName]) !== String(propValue)) {
            return false;
          }
        } else if ((e as any)[propName] === false) {
          return false;
        }
      }
    }
  }

  return true;
};

const getClickTypes = (types: CLICK_TYPES[]) => {
  const clickTypes = [];

  for (let i = 0; i < types.length; i++) {
    const alias = (CLICK_TYPES as any)[types[i]];
    clickTypes.push(alias === void 0 ? types[i] : alias);
  }

  return clickTypes;
};

function useConditionClick(fn: ClickConditionEvent, ...types: CLICK_TYPES[]) {
  const clickTypes = useRef([]);
  useEffect(() => {
    clickTypes.current = getClickTypes(types);
  }, [types]);
  return useCallback(
    (e: React.MouseEvent) => {
      if (isClickOfType(e, clickTypes.current) === true) {
        const { left, top } = (e.target as HTMLElement).getBoundingClientRect();
        fn(e, { x: e.clientX - Math.floor(left), y: e.clientY - Math.floor(top) });
      }
    },
    [fn],
  );
}

export default useConditionClick;
export * from './types';
