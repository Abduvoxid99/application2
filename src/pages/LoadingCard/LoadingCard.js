import React from 'react'
import "./loadingCard.scss"
import loadingCard from "../../images/loadingCard.png"
import Filial from "../../components/Filial/Filial"
import {tokens} from "../../tokens"
import {useSelector} from "react-redux"
import {lang, translate} from "../../LanguageContext";

const LoadingCard = () => {

    const {token,isToken}  = useSelector(state => state.application)
    const ctoken = isToken ? token : tokens.ctoken

    const handleBack = () => {
        window.location.replace(`${window.location.origin}/hamkor-store?lang=${lang}&ctoken=${ctoken}&oauth=${tokens.oauth}`)
    }

    return (
        <div className="loading_body">
            <div className="load_img">
                <div className="load_image">
                    <img src={loadingCard} alt="loading img"/>
                </div>
                <h3 className="loading_title">{translate("loadCardTitle")}</h3>
                <p className="message_onboarding">
                    {translate("loadCardText")}
                </p>
            </div>

            <div className="navigation_btn">
                <Filial/>
                <button className="next-btn success_btn_request" onClick={handleBack}>
                    {translate("toHamkorStore")}
                </button>
            </div>
        </div>
    )
}

export default LoadingCard