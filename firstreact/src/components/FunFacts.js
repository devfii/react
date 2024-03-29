import logo from '../images/logo.svg'
function Header() {
    return (
        <header className='App-header'>
            <nav>
                <img src={logo} alt="React logo" className='App-logo'></img>
                <h3>ReactFacts</h3>
                
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}

function MainComponent() {
    return (
        <main >
            <h1 className="main--title">Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K Stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default function FunFacts() {
    return (
        <div className="App">
            <Header />
            <MainComponent />
        </div>
    )
}