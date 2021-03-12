import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
import ermaLink from './images/erma-bombeck/erma6.png';
import zombieLink from './images/zombie-prom/zombie6.jpg';
import showcaseLink from './images/appco-showcase/appco17.jpg';
import fclLink from './images/five-course-love/fcl5.jpg';
import { ErmaBombeck } from './erma-bombeck';
import { ZombieProm } from './zombie-prom';
import { AppcoShowcase } from './appco-showcase';
import { FiveCourseLove } from './five-course-love';


export function LightingDesign () {
    return (
        <div className='lighting-portfolio'>
            <Router>
                <div className='show-tiles'>
                    <div>
                        <li>
                            <NavLink activeClassName='selected' to='/erma-bombeck'>Erma Bombeck: At Wit's End</NavLink>
                        </li>
                        <Link to='/erma-bombeck'>
                            <img src={ermaLink} 
                            alt='erma cover' 
                            id='lighting-link'/>
                        </Link>
                    </div> 
                    <div>
                        <li>
                            <NavLink activeClassName='selected' to='/zombie-prom'>Zombie Prom</NavLink>
                        </li>
                        <Link to='/zombie-prom'>
                            <img src={zombieLink} 
                            alt='zombie cover'
                            id='lighting-link'/>
                        </Link>
                    </div>
                    <div>
                        <li>
                            <NavLink activeClassName='selected' to='/aurora-appco-showcase'>Aurora AppCo Showcase</NavLink>
                        </li>
                        <Link to='/aurora-appco-showcase'>
                            <img src={showcaseLink} 
                            alt='showcase cover' 
                            id='lighting-link'/>
                        </Link>
                    </div>
                    <div>
                        <li>
                            <NavLink activeClassName='selected' to='/five-course-love'>Five Course Love</NavLink>
                        </li>
                        <Link to='/five-course-love'>
                            <img src={fclLink} 
                            alt='fcl cover'
                            id='lighting-link'/>
                        </Link>
                    </div>
                    <Switch>
                        <Route path='/erma-bombeck'>
                            <ErmaBombeck className='show-photos'/>
                        </Route>
                        <Route path='/zombie-prom'>
                            <ZombieProm className='show-photos'/>
                        </Route>
                        <Route path='/aurora-appco-showcase'>
                            <AppcoShowcase className='show-photos'/>
                        </Route>
                        <Route path='/five-course-love'>
                            <FiveCourseLove className='show-photos'/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}