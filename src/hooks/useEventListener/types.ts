export type UseEventListener = {
  handler: (event: Event) => void;
  element: (Window & typeof globalThis) | Element;
  eventName: string;
};
