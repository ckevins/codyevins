import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import {Portfolio} from './portfolio';
  import {LightingDesign} from './lighting-design';

  export function PortfolioRouter() {
    return (
      <div>
        <Router>
          <div>
            <nav className='resume-router'>
              <ul>
                <li>
                  <NavLink activeClassName='selected' to='/portfolio'>Web Development</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='selected' to='/lighting-design'>Lighting Design</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/lighting-design'>
                <LightingDesign/>
              </Route>
              <Route path='/portfolio'>
                <Portfolio/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }