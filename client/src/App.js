import './App.css';
import Login from './Components/Login';
import signup from './Components/signup';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
function App() {
  return ( 
    <Router>
    <Switch>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/signup.js'} component={signup} />
    </Switch>
    </Router>
  );
}

export default App;
