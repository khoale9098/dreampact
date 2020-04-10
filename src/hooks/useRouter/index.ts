import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

export function useRouter<TParams = void>() {
  const params = useParams<TParams>();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const router = useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      params,
      query: queryString.parse(location.search),
      match,
      location,
      history,
    };
  }, [params, match, location, history]);

  return router;
}
