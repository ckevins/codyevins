import logo from '../cody-evins-logo.png';


export function Home() {
    return (
        <div>
            <header className="App-header">
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/> 
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Cody Evins</h1>
                <h3>Full Stack Web Developer</h3>
                <h3>Lighting Designer</h3>
            </header>
        </div>
    )
}