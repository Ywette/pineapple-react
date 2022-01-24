import './Navigation.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const navigationLinks = [
  'about', 'how it works', 'contact',
];
const Navigation = () => (

  <div className="navigation">
    <Link to="/">
      <div className="navigation__logo-container">

        <img className="navigation__logo" src={logo} alt="logo" />
        <span className="navigation__logo-name">pineapple.</span>

      </div>
    </Link>
    <ul className="navigation__list">

      {navigationLinks.map((link) => (

        <li key={link}>
          <Link className="navigation__link" key={link} to="/">
            {link}
          </Link>
        </li>

      ))}
    </ul>
  </div>
);

export default Navigation;
