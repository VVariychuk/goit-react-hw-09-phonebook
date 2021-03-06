import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

export default function  PublicRoute ({
  component: Component,  
  redirectTo,
  ...routeProps
}) {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated)

  return (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);}
