
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './Pages/About';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path ="/login" component={Login} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
