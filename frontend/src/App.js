import { Route, Switch } from 'react-router-dom'
import SignupFormPage from './components/SignupForm';
import HomePage from './components/HomePage/HomePage'
import Profile from './components/Profile/Profile'
import EventDetails from './components/EventDetails/EventDetails';
import ProtectedRoute from './components/auth/ProtectRoute';
import { useSelector } from 'react-redux';
import Login from './components/LoginForm/Login';

import Details from './components/EventDetails/Details';
function App() {
  const user = useSelector(state => state.session.user)

 
  return (
    <>
    <Switch>
      
      <Route path='/' exact>
        <HomePage />
      </Route>
      
      <Route path='/login' >
         <Login />
      </Route>
      
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
      

      <ProtectedRoute path='/profile' exact={true}>
        <Profile />
      </ProtectedRoute>

      <ProtectedRoute path='/details/:id' exact={true}>
        <Details />
      </ProtectedRoute>

    </Switch>
    </>
  );
}

export default App;
