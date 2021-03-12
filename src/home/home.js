import logo from '../cody-evins-logo.png';
import {
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';

export function Home() {
    return (
        <div className='home-page'>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Cody Evins</h1>
            </header>
            <h2>Full Stack Web Developer</h2>
            <h2>Lighting Designer</h2>
            <div className="social">
                <a href="https://www.linkedin.com/in/codyevins/"><FaLinkedin /></a>
                <a href="https://github.com/ckevins"><FaGithub /></a>
            </div>
        </div>
    )
}