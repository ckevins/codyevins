import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  import { WebDevPortfolio } from './web-dev-portfolio';
  import { LightingDesign } from './lighting-design';
  import { GraphicDesign } from "./graphic-design";
  import { Woodworking } from "./woodworking";

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
                <li>
                    <NavLink activeClassName='selected' to='/graphic-design'>Graphic Design</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='selected' to='/woodworking'>Woodworking</NavLink>
                </li>
              </ul>
            </nav>
            <Switch>
                <Route path='/lighting-design'>
                    <LightingDesign/>
                </Route>
                <Route path='/graphic-design'>
                    <GraphicDesign/>
                </Route>
                <Route path='/woodworking'>
                    <Woodworking/>
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