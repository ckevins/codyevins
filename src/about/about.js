import headShot from './Cody_02.jpg';

export function About() {
    return(
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/> 
            <img src={headShot} alt='pic of Cody' id='head-shot'/>
            <p>I'm Cody Evins. Evins with an I. Two actually. Two eyes for design.</p>
        </div>
    )
}