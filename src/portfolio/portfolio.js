import {
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';


export function Portfolio() {
    return(
        <div className='portfolio'>
            <h1>Web Development Portfolio</h1>
                <h2>Personal Websites</h2>
                    <h3>Cody Evins</h3>
                        <p>Full Stack Web Developer | Lighting Designer</p>
                        <p><a href="https://codyevins.herokuapp.com/">codyevins.herokuapp.com</a></p>
                    <h3>Meg Harkins</h3>
                        <p>Actress | Writer </p>
                        <p><a href="https://megharkins.herokuapp.com/">megharkins.herokuapp.com</a></p>
                <h2>Applications</h2>
                    <h3>Furman Theatre Golf Darts</h3>
                        <p>An application for inputting scores and tracking statistics and rankings for a darts game based on golf.</p>
                        <p><a href="https://golf-darts.herokuapp.com/">golf-darts.herokuapp.com</a></p>
            <div className="social">
                <a href="https://www.linkedin.com/in/codyevins/"><FaLinkedin /></a>
                <a href="https://github.com/ckevins"><FaGithub /></a>
            </div>
        </div>
    )
}