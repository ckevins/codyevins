import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import './App.css';
import { Home } from './home/home';
import { Resume } from './resume/resume';
import { About } from './about/about';
import { LightingDesign } from './lighting-design/lighting-design';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className='app-router'>
            <ul>
              <li>
                <NavLink exact={true} activeClassName='selected' to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='selected' to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink activeClassName='selected' to='/resume'>Resume</NavLink>
              </li>
              <li>
                <NavLink activeClassName='selected' to='/lighting'>Lighting Design</NavLink>
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
            <Route path='/lighting'>
              <LightingDesign/>
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
