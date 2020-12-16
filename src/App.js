import React from 'react'
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Container, Divider } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserPage from './components/Users/UserPage'
import RepoPage from './components/Repos/RepoPage'
import SearchInput from './components/SearchBar/SearchInput'
import Error from './components/Utils/Error'

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Poppins, Arial',
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
    <Container  >
          <Router>
        <Switch>
          <Route path='/' exact={true}>
                <SearchInput  />
                <Divider />
                <UserPage />
          </Route>
          <Route path='/repodash/:repoid'>
               <RepoPage/>
          </Route>
          <Route path='*'>
              <Error message={'Error 404'} submessage={'Not Found'} goback={true}/>
          </Route>
        </Switch>
      </Router>
    </Container>
    </ThemeProvider>
  );
}

export default App;
