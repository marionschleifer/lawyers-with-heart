import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
import { AppBar, IconButton, Toolbar } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider>
        <AppBar style={{ backgroundColor: '#e91e63' }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>

            <div>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default App;
