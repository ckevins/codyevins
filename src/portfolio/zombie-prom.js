import zombie1 from './images/zombie-prom/zombie1.jpg';
import zombie2 from './images/zombie-prom/zombie2.jpg';
import zombie3 from './images/zombie-prom/zombie3.jpg';
import zombie4 from './images/zombie-prom/zombie4.jpg';
import zombie5 from './images/zombie-prom/zombie5.jpg';
import zombie6 from './images/zombie-prom/zombie6.jpg';


export function ZombieProm() {
    return (
        <div className='show-gallery'>
            <h1>Zombie Prom (2019)</h1>
            <h2>Georgia Gwinnett College</h2>
            <p>Director: Renita James</p>
            <p>Scenic Designer: Cody Russell</p>
            <p>Costume Designer: Alice Neff</p>
            <p>Photos: Rod Reilly</p>
            <div className='photo-container'>
                <img src={zombie3} alt='zombie3' className='show-photo'/>
                <img src={zombie4} alt='zombie4' className='show-photo'/>
                <img src={zombie5} alt='zombie5' className='show-photo'/>
                <img src={zombie6} alt='zombie6' className='show-photo'/>
                <img src={zombie2} alt='zombie2' className='show-photo'/>
                <img src={zombie1} alt='zombie1' className='show-photo'/>
            </div>
        </div>
    )
}