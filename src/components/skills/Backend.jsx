import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return(
        <div className="skills__content">
        <h3 className="skills__title">Other Skills</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Canva</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Case Study</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Guesstimates</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Electronics</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">VideoEditing</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
                
            </div>
            <div className="skills__group">
                
                <div className="skills__data">
                    <HiCheckBadge />
                    <div>
                        <h3 className="skills__name">Management</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Backend;