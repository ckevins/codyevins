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
                    <p>Hello! I'm Cody. I have a lot to say. But I sure don't know what to say right now. 
                        So I'm just gonna type and type and type until I run out of stuff to type. 
                        I'm just trying to fill space for styling purposes.</p>
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