import { connect } from 'react-redux';

import {authSelectors} from '../redux/auth';

const HomeView = ({ isAuthenticated }) => (
    <div style ={{marginLeft: 15}}>
      {isAuthenticated
      ? <h1 style={{ color: '#E84A5F' }}>Please go to the contacts page</h1>
      : <h1 style={{ color: '#ff6347' }}>Please Sign In or Sign Up</h1>
      }
   </div> 
);

const mapStateToProps = state => ({
isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomeView);