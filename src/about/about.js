import headShot from './Cody_02.jpg';
import {
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';


export function About() {
    return(
        <div className='about'>
            <div className='bio'>
                <div>
                    <p>Hello! I'm Cody. I'm a theatre artist turned web developer from Franklin, Tennessee. I studied theatre arts in college at Furman University and moved down to Atlanta to pursue a career as a designer. I was gradually picking up momentum in that field when 2020 came along.  I went from numerous bookings to none at all in a matter of days.  With my future in theatre thrown into total uncertainty, I decided to use all the time stuck at home that 2020 gave me to learn web development so that I'd have the tools needed to transition to a new career in these uncertain times.</p>
                </div>
                <img src={headShot} alt='pic of Cody' id='head-shot'/>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/codyevins/"><FaLinkedin /></a>
                <a href="https://github.com/ckevins"><FaGithub /></a>
            </div>
        </div>
    )
}