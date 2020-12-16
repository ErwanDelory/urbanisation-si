import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import './styles/app.css';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import NavbarYoutube from './components/navbar';
import { AuthContext } from './context/auth';
import Profile from './pages/profile';

const App = () => {
  const existingToken = sessionStorage.getItem('token');
  const [authTokens, setAuthTokens] = useState(existingToken);

  const setTokens = (data) => {
    setAuthTokens(data);
  };
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <NavbarYoutube isConnected={!!authTokens} />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
