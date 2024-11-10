// This is certifications Section

import React, { useState } from 'react';
import './services.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Certifications</h2>
        <span className="section__subtitle">Learn & Grow</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Fundamentals Of Digital Marketing - Google</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    Credential
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <h3 className="services__modal-title">Fundamentals of Digital Marketing</h3>
                        <p className="services__modal-description">
                           Google
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                
                                <a href="https://drive.google.com/file/d/1IXLzrbol5jNj695MrSOhyMUopAvhXXBQ/view?usp=sharing" target='_blank'>click here</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Comming Soon..<br /></h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                Credential
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Comming Soon...</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>
                Credential
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                
            </div>
        </div>
        
    </section>
  );
}

export default Services;