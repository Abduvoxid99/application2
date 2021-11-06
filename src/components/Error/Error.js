import React, {useState} from "react"
import {Button} from "antd"

import {translate} from "../../LanguageContext"
import {handleRedirect} from "../handleBack"
// images
import Close from "../../images/Close.png"

import "./error.scss"


const Error = () => {

    const [loading, setLoading] = useState(false)

    const handleBack = () => {
        setLoading(true)
        handleRedirect()
    }
    return (
        <div className="error_main">
            <div className="error_contain">
                <img src={Close} alt="error message"/> <br/>
                <h3 className="error_title">
                    {translate("errorTitle")}
                </h3>
                <p className="error_note_message">
                    {translate("errorText")}
                </p>
            </div>

            <div className="navigation_btn" onClick={handleBack}>
                <Button
                    className="next-btn"
                    loading={loading}
                >
                    {translate("back")}
                </Button>
            </div>

        </div>
    );
}
export default Error

