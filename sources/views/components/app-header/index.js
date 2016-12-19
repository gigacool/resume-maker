import React from 'react';
import { Link } from 'react-router';

function AppHeader() {
  return (
    <header className="header">
      <h1 className="header-title">
        <Link to="/">resume<b>.maker</b></Link>
      </h1>
      <ul className="header-actions">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}
// <li>
//   <a className="link link--github" rel="noreferrer noopener" target="_blank" href="https://github.com/gigacool/resume-maker" >About</a>
// </li>

AppHeader.propTypes = {};

export default AppHeader;
