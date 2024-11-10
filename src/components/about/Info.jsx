import React from 'react';
import { HiOutlineDesktopComputer,  HiOutlineSparkles, HiDatabase } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Developer</h3>
            {/* <span className="about__subtitle">3 Years</span> */}
        </div>
        <div className="about__box">
            <HiDatabase className="about__icon" />
            <h3 className="about__title">Analyst</h3>
            {/* <span className="about__subtitle">35+ Projects</span> */}
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Business Entusiast</h3>
            {/* <span className="about__subtitle">Online 24/7</span> */}
        </div>
    </div>
  );
}

export default Info;