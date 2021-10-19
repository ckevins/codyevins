import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import { WebDevPortfolio } from './web-dev-portfolio';
  import { LightingDesign } from './lighting-design';
  import { Art } from "./art";

  export function PortfolioRouter() {
    return (
      <div>
        <Router>
          <div>
            <nav className='resume-router'>
              <ul>
                <li>
                    <NavLink activeClassName='sub-selected' to='/portfolio'>Web Development</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='sub-selected' to='/lighting-design'>Lighting Design</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='sub-selected' to='/art'>Art</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
                <Route path='/lighting-design'>
                    <LightingDesign/>
                </Route>
                <Route path='/art'>
                    <Art/>
                </Route>
                <Route path='/portfolio'>
                    <WebDevPortfolio/>
                </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }