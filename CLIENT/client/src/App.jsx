import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import { ThemeProvider } from '@material-ui/styles';
// import { hot } from 'react-hot-loader';
import MainRouter from '../MainRouter';
// import Contact from './contact';
// import theme from '../theme';

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default App;
