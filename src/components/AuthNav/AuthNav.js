import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    marginRight: 15,
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const AuthNav = () => (
    <div>
        <NavLink to="/register" exact style={styles.link} activeStyle={styles.activeLink}>
            Sign Up
        </NavLink>
         <NavLink
            to="/login" exact style={styles.link} activeStyle={styles.activeLink}>
            Sign In
        </NavLink>
  </div>  
);

export default AuthNav;