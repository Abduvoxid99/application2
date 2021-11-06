import React from 'react';

import "./success.scss"
import {handleRedirect} from "../../components/handleBack"
import {translate} from "../../LanguageContext"

//components
import Filial from "../../components/Filial/Filial"
import Header from "../../components/Header/Header"

//images
import success_icon from "../../images/ptichka.png"
import success_img from "../../images/clone.png"


const Success = () => {

    return (
        <div className="success_main">
            <Header title={translate("successHeadTitle")} handleClick={handleRedirect}/>

            <div className="success_container">
                <div className="success_body">
                    <div className="success_img">
                        <img src={success_img} alt="success icon"/>
                        <img className="success_icon" src={success_icon} alt="success icon"/>
                    </div>
                </div>

                <div className="success_text"><h1>{translate("successTitle")}</h1>
                    <p>{translate("successText")}</p>
                </div>
            </div>

            <div className="navigation_btn">
                <Filial/>
                <button className="next-btn" onClick={handleRedirect}>
                    {translate("toHamkorStore")}
                </button>
            </div>
        </div>

    );
};

export default Success