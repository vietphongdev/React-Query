import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import { pageRoutes } from './config/routes';
import { useProfileQuery } from './hooks/useAuth';
import { AppBar, Box, Toolbar } from '@mui/material';
import AppointmentDetails from './pages/AppointmentDetails';
import AppointmentList from './pages/AppointmentList';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const history = useHistory();
  const { error } = useProfileQuery();

  useEffect(() => {
    if (error) {
      history.replace(pageRoutes.auth);
    }
  }, [error]);

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <UserProfile />
          </Box>
        </Toolbar>
      </AppBar>

      <Box width={500} m="auto" mt={2}>
        <Switch>
          <Route path={pageRoutes.main} exact>
            <AppointmentList />
          </Route>
          <Route path={pageRoutes.auth} exact>
            <Auth />
          </Route>
          <Route path={pageRoutes.appointment} exact>
            <AppointmentDetails />
          </Route>
        </Switch>
      </Box>
    </>
  );
}

export default App;
