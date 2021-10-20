import powerLogo1 from './images/art-portfolio/cody-evins-power-logo-1.png';
import powerLogo2 from './images/art-portfolio/cody-evins-power-logo-2.png';
import powerAnimation from './images/art-portfolio/power-animation.gif';
import valtheonaa4 from './images/art-portfolio/valtheonaa-4th-draft.jpg';
import valtheonaa3 from './images/art-portfolio/valtheonaa-draft3.jpg';
import valtheonaa2 from './images/art-portfolio/valtheonaa-draft2.jpg';
import valtheonaa1 from './images/art-portfolio/valtheonaa-draft1.jpg'


export function Art () {
    return (
        <div className='art-portfolio'>
            <h1>Art</h1>
            <h2>Graphic Design</h2>
            <h3>Personal Branding</h3>
            <p>My personal branding that combines my initials, CE, with a power symbol.</p>
            <div>
                <img src={powerLogo1} alt='power1' className='graphic-design'/>
                <img src={powerLogo2} alt='power2' className='graphic-design'/>
                <img src={powerAnimation} alt='powerAnimation' className='graphic-design'/>
            </div>
            <h3>World Building</h3>
            <p>A series of drafts of the map of Valtheonaa, an island for a Dungeons and Dragons campaign.  
                Unlabeled geography had not yet been visited at time of draft.
                Older drafts shown to show progression.</p>  
            <p>Original geography by our dungeon master, Brett Rogers.</p>
            <div className='valtheonaa-maps'>
                <img src={valtheonaa4} alt='valtheonaa-draft-4' className='world-building'/>
                <div>
                    <img src={valtheonaa3} alt='valtheonaa-draft-3' className='world-building-draft'/>
                    <img src={valtheonaa2} alt='valtheonaa-draft-2' className='world-building-draft'/>
                    <img src={valtheonaa1} alt='valtheonaa-draft-1' className='world-building-draft'/>
                </div>
            </div>
        </div>
    )
}