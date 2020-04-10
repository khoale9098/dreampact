export type Details = {
  x: number;
  y: number;
};

export type ClickConditionEvent = (event: React.MouseEvent, details: Details) => void;

export enum CLICK_TYPES {
  single = 'detail=1',
  double = 'detail=2',
  triple = 'detail=3',
  left = 'button=0',
  middle = 'button=1',
  right = 'button=2',
  shift = 'shiftKey',
  control = 'ctrlKey',
  meta = 'metaKey',
  alt = 'altKey',
}
