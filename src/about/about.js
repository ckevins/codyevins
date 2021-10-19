import headShot from './Cody_2021-5.jpg';
import {
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';


export function About() {
    return(
        <div className='about'>
            <div className='bio'>
                <img src={headShot} alt='pic of Cody' id='head-shot'/>
                <div>
                    <p>
                        Hello! I'm Cody. I'm a theatre artist and web developer based in Nashville, Tennessee.
                    </p>
                    <p>
                        I studied theatre arts at Furman University where I gained experience both on and off stage.
                        After graduating, I became a Technical Theatre Apprentice at the Aurora Theatre in Lawrenceville, GA, where I began to work primarily in the lighting department.
                        After completing my apprenticeship, I began working in the Atlanta area primarily as a Master Electrician and Lighting Designer with a few sound designs here and there.
                    </p>
                    <p>
                        My theatre career was beginning to pick up momentum in early 2020 when it then came to a screeching halt.  
                        Suddenly with a lot of time on my hands, I decided to teach myself some new skills since I knew that a career in theatre was no longer a certainty.
                        I began to teach myself how to code with an emphasis on JavaScript and React.
                    </p>
                </div>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/codyevins/"><FaLinkedin /></a>
                <a href="https://github.com/ckevins"><FaGithub /></a>
            </div>
        </div>
    )
}