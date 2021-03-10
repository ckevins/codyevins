import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ermaLink from './images/erma-bombeck/IMG_1662.png';
import zombieLink from './images/zombie-prom/Honors Zombie Prom FinalHonors Zombie prom FinalZombie Prom Master_GGC7826.jpg';
import showcaseLink from './images/appco-showcase/AppcoShowcase-27.jpg';

export function LightingDesign () {
    return (
        <div className='lighting-portfolio'>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/> 
            <Router>
                <div className='show-tiles'>
                    <div>
                        <h1>Erma Bombeck: At Wit's End</h1>
                        <Link to='/erma-bombeck'>
                            <img src={ermaLink} 
                            alt='erma cover' 
                            id='lighting-link'/>
                        </Link>
                    </div> 
                    <div>
                        <h1>Zombie Prom</h1>
                        <Link to='/zombie-prom'>
                            <img src={zombieLink} 
                            alt='zombie cover'
                            id='lighting-link'/>
                        </Link>
                    </div>
                    <div>
                        <h1>Aurora AppCo Showcase 2018</h1>
                        <Link to='/aurora-appco-showcase'>
                            <img src={showcaseLink} 
                            alt='showcase cover' 
                            id='lighting-link'/>
                        </Link>
                    </div>
                    <div>
                        <h1>Five Course Love</h1>
                        <Link to='/five-course-love'><img src='' alt='fcl cover'/></Link>
                    </div>
                    <div>
                        <h1>The Addams Family</h1>
                        <Link to='/addams-family'><img src='' alt='addams family cover'/></Link>
                    </div>
                </div>
            </Router>
        </div>
    )
}