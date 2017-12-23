import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__list">
          <li>
            <a
              className="footer__link"
              href="https://github.com/wasetime/wasetime-web"
            >
              GitHub
            </a>
          </li>
        </ul>
        <p className="footer__description">
          Created with ❤️ by&nbsp;
          <a className="footer__author" href="https://github.com/OscarWang114">
            Oscar Wang
          </a>
        </p>
        <p className="footer__description">Wasetime 2017. Code licensed MIT.</p>
      </footer>
    );
  }
}
