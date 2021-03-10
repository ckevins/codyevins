import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {WebDevelopmentResume} from './web-development-resume';
import {TheatricalResume} from './theatrical-resume';

export function Resume() {
    return (
      <div className>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/resume'>Web Development</Link>
                </li>
                <li>
                  <Link to='/theatrical-resume'>Theatrical</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path='/resume'>
                <WebDevelopmentResume/>
              </Route>
              <Route path='/theatrical-resume'>
                <TheatricalResume/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }


