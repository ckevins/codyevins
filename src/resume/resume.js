import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import {WebDevelopmentResume} from './web-development-resume';
import {TheatricalResume} from './theatrical-resume';

export function Resume() {
    return (
      <div>
        <Router>
          <div>
            <nav className='resume-router'>
              <ul>
                <li>
                  <NavLink activeClassName='sub-selected' to='/resume'>Web Development</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='sub-selected' to='/theatrical-resume'>Theatrical</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/theatrical-resume'>
                <TheatricalResume/>
              </Route>
              <Route path='/resume'>
                <WebDevelopmentResume/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }


