import React from "react"
import {GeolocationControl, Map, Placemark, YMaps, ZoomControl} from "react-yandex-maps"
import {useSelector} from "react-redux"

//components
import Header from "../../components/Header/Header"
import Filial from "../../components/Filial/Filial"
import {tokens} from "../../tokens"
import {lang} from "../../LanguageContext"

import "./location.scss"
import greenLocation from "../../images/greenLocation.png"

const {YANDEX_MAP_API_KEY} = process.env

export const Location = ({opened}) => {
    const {branch_code} = useSelector(state => state.application);
    const branch = useSelector(state => state.branch.branches.filter(item => item.id === branch_code)[0])

    const lat = branch ? branch.cordinates.lat : ''
    const long = branch ? branch.cordinates.long : ''

    const coordinates = [
        [lat, long]
    ]

    const {token, isToken} = useSelector(state => state.application)
    const ctoken = isToken ? token : tokens.ctoken

    const handleBack = () => {
        window.location.replace(`${window.location.origin}/hamkor-store?lang=${lang}&ctoken=${ctoken}&oauth=${tokens.oauth}`)
    }

    return (
        <div className="filial_main">
            <Header title="Адрес филиала" handleClick={handleBack}/>
            {
                (branch_code && branch) && <div className="filial_body">
                    <YMaps query={{apikey: YANDEX_MAP_API_KEY}}>
                        <Map
                            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                            width={"100%"}
                            height="100vh"
                            defaultState={{
                                center: [lat, long],
                                zoom: 15,
                                controls: [],
                            }}
                        >
                            {
                                coordinates.map(coordinate =>
                                    <Placemark
                                        key={coordinate}
                                        geometry={coordinate}
                                        properties={{
                                            hintContent: "Bank",
                                            balloonContent: `АКБ "Hamkorbank ${branch && branch.title[lang]}" `,
                                            iconCaption: "Bank"
                                        }}
                                        options={{
                                            iconLayout: "default#image",
                                            iconImageHref: greenLocation,
                                        }}
                                    />
                                )
                            }
                            <ZoomControl options={{float: "right"}}/>
                            <GeolocationControl options={{float: "left"}}/>
                        </Map>
                    </YMaps>
                    <Filial opened={opened}/>
                </div>
            }
        </div>
    )
}


