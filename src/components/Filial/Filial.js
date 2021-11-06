import React, {useState} from "react"
import {useSelector} from "react-redux"

import geolocation from "../../icons/Ellipse 10 (1).png"
import {Location} from "../../pages/Location/Location"
import {lang, translate} from "../../LanguageContext"

const Filial = ({opened}) => {

    const [openLocation, setOpenLocation] = useState(false)
    const {branch_code} = useSelector(state => state.application)
    const branch = useSelector(state => state.branch.branches.filter(item => item.id === branch_code)[0])

    return openLocation ? <Location opened={openLocation}/> :
        <div
            className="success_branch"
            onClick={() => !opened && setOpenLocation(true)}
        >
            <img src={geolocation} alt="geolocation"/>
            <p className="branch_text">
                АКБ "Hamkorbank" {branch && branch.title[lang]}
                <br/>
                <span style={{color: "#35BB06"}}>{translate("workTime")}</span>
            </p>
        </div>
}

export default Filial