import React from "react";
import {  FiGithub, FiLinkedin, FiCode} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/goelsahab/" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://github.com/goelashu937" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://leetcode.com/u/AshuGoel/" className="home__social-icon" target="_blank">
                <FiCode />
            </a>
            
            
        </div> 
    ); 
}

export default Social;