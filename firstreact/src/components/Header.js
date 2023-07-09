import logo from '../images/logo.svg'

function Header() {
    return (
        <header>
          <nav className="nav">
            <img src={logo} alt="" className="logo"></img>
            <ul className="nav-items">
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
    )
  }

export default Header;