import {
    FaPrint
  } from 'react-icons/fa';

export function WebDevelopmentResume() {
    return (
        <div className='resume'>
            <div className='resume-left-column'>
                <div className='resume-div'>
                    <h2>Education</h2>
                    <p>Furman University</p>
                    <p>BA in Theatre Arts, 2017</p>
                    <p>Graduated Cum Laude</p>
                    <p>Focus in English</p>
                </div>
                <div className='resume-div'>
                    <h2>Languages</h2>
                    <p>JavaScript</p>
                    <p>SQL (PostgreSQL)</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>
                <div className='resume-div'>
                    <h2>Frameworks</h2>
                    <p>Node.js</p>
                    <p>React</p>
                    <p>Express</p>
                    <p>Git</p>
                    <p>Zsh</p>
                    <p>Visual Studio Code</p>
                    <p>Flexbox</p>
                </div>
                <div className='resume-div'>
                    <h2>Honors</h2>
                    <h3>Omicron Delta Kappa</h3>
                    <p>National Leadership Honor Society</p>
                    <h3>Sigma Tau Delta</h3>
                    <p>National English Honor Society</p>
                </div>
            </div>
            <div className='resume-right-column resume-div experience-section'>
                    <h2>Experience</h2>
                    <h3>Furman Theatre Golf Darts Application</h3>
                        <p>March 2020 - January 2021 | Atlanta, Georgia</p>
                        <p>Independently developed an application for tracking scores and statistics of a golf-darts game played daily by the Furman Theatre Department.</p>
                        <p>Front-end written using React.</p>
                        <p>Back-end API written using Express with PostgreSQL relational databases for the storing of player scores.</p>
                        <p>Application includes components for score input, team creation, statistics calculations, and rankings tables.</p>
                    <h3>Freelance Lighting Designer</h3>
                        <p>May 2018 - March 2020 | Atlanta, Georgia</p>
                        <p>Aided the storytelling of plays and musicals through lighting.</p>
                        <p>Developed design concepts through interpretation of scripts and collaboration with directors and design teams.</p>
                        <p>Drafted lighting plots to detail all the instruments needed for each production.</p>
                        <p>Programmed all lighting cues using Eos-family lighting consoles.</p>
                    <h3>Freelance Lighting Programmer</h3>
                        <p>May 2018 - March 2020 | Atlanta, Georgia</p>
                        <p>Assisted lighting designers through the tech process of plays and musicals.</p>
                        <p>Responsible for programming all lighting cues of plays and musicals as desired by the lighting designers using Eos-family lighting consoles.</p>
                        <p>Required fast paced programming as we would often have to program on the fly during live musical numbers.</p>
                    <h3>Freelance Master Electrician</h3>
                        <p>February 2018 - March 2020 | Atlanta, Georgia</p>
                        <p>Worked closely with theatrical lighting designers to bring their designs to life.</p>
                        <p>Analyzed lighting plots and built a plan for safe and efficient installation of all elements.</p>
                        <p>Led a team of electricians through the installation, troubleshooting, and light focusing processes.</p>
                        <p>Responsible for patching all fixtures to the lighting console so that all parameters were controllable through DMX.</p>
                        <p>Worked closely with production managers and technical directors to effectively work alongside carpenters as they installed scenic elements.</p>
                    <h3>Freelance Sound Designer</h3>
                        <p>May 2018 - February 2019 | Atlanta, Georgia</p>
                        <p>Aided the storytelling of plays through sound.</p>
                        <p>Developed design concepts through interpretation of scripts and collaboration with directors and design teams.</p>
                        <p>Programmed all sound effects and cues using QLab.</p>
            </div>
            <div className='print-pdf'>
                <a href='docs/cody-evins-resume.pdf'><FaPrint/></a>
            </div>
        </div>
    )
};