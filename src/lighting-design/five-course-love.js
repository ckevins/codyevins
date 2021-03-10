import fcl1 from './images/five-course-love/fcl1.jpg';
import fcl2 from './images/five-course-love/fcl2.jpg';
import fcl3 from './images/five-course-love/fcl3.jpg';
import fcl4 from './images/five-course-love/fcl4.jpg';
import fcl5 from './images/five-course-love/fcl5.jpg';


export function FiveCourseLove() {
    return (
        <div className='show-gallery'>
            <h1>Five Course Love (2020)</h1>
            <h2>Marietta Theatre Company</h2>
            <p>Director: Stephanie Earle</p>
            <p>Scenic Designer: Blaine Clotfelter</p>
            <p>Photos: Cloud 8 Photography</p>
            <div className='photo-container'>
                <img src={fcl1} alt='erma1' id='show-photo'/>
                <img src={fcl2} alt='erma2' id='show-photo'/>
                <img src={fcl3} alt='erma3' id='show-photo'/>
                <img src={fcl4} alt='erma4' id='show-photo'/>
                <img src={fcl5} alt='erma5' id='show-photo'/>
            </div>
        </div>
    )
}