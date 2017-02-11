import React from 'react';
import { Link } from 'react-router';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">mon<b>.cv</b></Link>
      </h1>
      <ul className="header-actions">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/editor">Mon profil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </header>
  );
}
// <li>
//   <a className="link link--github" rel="noreferrer noopener" target="_blank" href="https://github.com/gigacool/resume-maker" >About</a>
// </li>

Header.propTypes = {};

export default Header;
