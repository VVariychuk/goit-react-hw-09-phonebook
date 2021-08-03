import { useSelector} from 'react-redux';

import { authSelectors } from '../redux/auth';


export default function HomeView() {
   
   const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

   return (
      <div style={{ marginLeft: 15 }}>
         {isAuthenticated
            ? <h1 style={{ color: '#E84A5F' }}>Please go to the contacts page</h1>
            : <h1 style={{ color: '#ff6347' }}>Please Sign In or Sign Up</h1>
         }
      </div>
   );
};
