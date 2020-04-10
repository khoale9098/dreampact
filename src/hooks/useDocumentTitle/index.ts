import { useCallback, useEffect } from 'react';
import { UseDocumentTitleResponse } from './types';
export default function useDocumentTitle(title?: string): UseDocumentTitleResponse {
  const setDocumentTitle = useCallback((title: string) => (document.title = title), []);

  function getDocumentTitle() {
    return document.title;
  }

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return {
    setDocumentTitle,
    getDocumentTitle,
  };
}
export * from './types';
