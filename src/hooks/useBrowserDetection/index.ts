import { useMemo } from 'react';

import Bowser from 'bowser';

import { BrowserDetection } from './types';

export default function useBrowserDetection(agent: NavigatorID['userAgent']): BrowserDetection {
  const browserInfo = useMemo(() => Bowser.parse(agent), [agent]);

  return {
    ...(browserInfo as BrowserDetection),
  };
}

export * from './types';
