import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { About } from './about/about';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/resume'>Resume</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/resume'>
              <Resume/>
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/'>
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
