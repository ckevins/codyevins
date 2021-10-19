import {
    FaLinkedin,
    FaGithub
  } from 'react-icons/fa';


export function WebDevPortfolio() {
    return(
        <div className='portfolio'>
            <h1>Web Development Portfolio</h1>
                <h2>Personal Websites</h2>
                    <h3>Cody Evins</h3>
                        <p>Full Stack Web Developer | Lighting Designer</p>
                        <p>Built with React</p>
                        <p><a href="https://codyevins.com/">codyevins.com</a></p>
                        <p><a href="https://github.com/ckevins/codyevins">github.com/ckevins/codyevins</a></p>
                    <h3>Meg Harkins</h3>
                        <p>Actress | Writer </p>
                        <p>Built with React</p>
                        <p><a href="https://megharkins.herokuapp.com/">megharkins.herokuapp.com</a></p>
                        <p><a href="https://github.com/ckevins/megharkins">github.com/ckevins/megharkins</a></p>
                <h2>Applications</h2>
                    <h3>Furman Theatre Golf Darts</h3>
                        <p>An application for inputting scores and tracking statistics and rankings for a darts game based on golf.</p>
                        <p>Built with React</p>
                        <p><a href="https://golf-darts.herokuapp.com/">golf-darts.herokuapp.com</a></p>
                        <p><a href="https://github.com/ckevins/golf-darts">github.com/ckevins/golf-darts</a></p>
                    <h3>StatTrax</h3>
                        <p>An application for use by baseball leagues with functionality for entering baseball scorecards as well as viewing statistics, standings, schedules, etc.</p>
                        <p>Built with Vue</p>
                        <p><a href="https://github.com/ckevins/stat-trax">github.com/ckevins/stat-trax</a></p>
            <div className="social">
                <a href="https://www.linkedin.com/in/codyevins/"><FaLinkedin /></a>
                <a href="https://github.com/ckevins"><FaGithub /></a>
            </div>
        </div>
    )
}