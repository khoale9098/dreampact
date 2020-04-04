import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

export function useRouter<TParams = void>() {
  const params = useParams<TParams>();
  const location = useLocation();
  const query = useMemo(() => queryString.parse(location.search), []);
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  const router = useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      params,
      query,
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);

  return router;
}
