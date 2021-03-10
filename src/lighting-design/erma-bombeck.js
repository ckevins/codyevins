import erma1 from './images/erma-bombeck/erma1.jpg';
import erma2 from './images/erma-bombeck/erma2.jpg';
import erma3 from './images/erma-bombeck/erma3.jpg';
import erma4 from './images/erma-bombeck/erma4.jpg';
import erma5 from './images/erma-bombeck/erma5.jpg';
import erma6 from './images/erma-bombeck/erma6.png';


export function ErmaBombeck() {
    return (
        <div className='show-gallery'>
            <h1>Erma Bombeck (2019)</h1>
            <h2>Aurora Theatre</h2>
            <p>Director: Megan Rose-Houchins</p>
            <p>Scenic Designer: Liz Gubler</p>
            <p>Costume Designer: Alice Neff</p>
            <p>Photos: Casey Gardner</p>
            <div className='photo-container'>
                <img src={erma1} alt='erma1' id='show-photo'/>
                <img src={erma2} alt='erma2' id='show-photo'/>
                <img src={erma3} alt='erma3' id='show-photo'/>
                <img src={erma4} alt='erma4' id='show-photo'/>
                <img src={erma5} alt='erma5' id='show-photo'/>
                <img src={erma6} alt='erma6' id='show-photo'/>
            </div>
        </div>
    )
}