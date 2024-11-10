import React from 'react';
import "./footer.css";
import { FiCode, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Ashu Goel</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Certifications</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.linkedin.com/in/goelsahab/" className="footer__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://github.com/goelashu937" className="footer__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://leetcode.com/u/AshuGoel/" className="footer__social-icon" target="_blank">
                <FiCode />
            </a>
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;