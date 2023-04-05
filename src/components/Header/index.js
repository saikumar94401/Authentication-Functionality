import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <ul className="header-link-list">
    <Link to="/" className="header-link">
      <li className="li">Home</li>
    </Link>
    <Link to="/about" className="header-link">
      <li className="li">About</li>
    </Link>
  </ul>
)

export default Header
