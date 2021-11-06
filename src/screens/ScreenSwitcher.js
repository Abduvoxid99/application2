import React, {lazy, Suspense} from "react"
import {useSelector} from "react-redux"

import Error from "../components/Error/Error"
import Loading from "../components/Loading/Loading"

const LoadingCard = lazy(() => import("../pages/LoadingCard/LoadingCard"))
const SuccessPage = lazy(() => import("../pages/Success/Success"))
const Card = lazy(() => import("../pages/Card/Card"))

export const ScreenSwitcher = () => {
    const {error, loading} = useSelector((state) => state.meta)
    const {milestone} = useSelector((state) => state.application)

    if (loading) return <Loading/>
    if (error) return <Error/>

    switch (milestone) {
        case 10:
            return <Suspense fallback={<Loading/>}><LoadingCard/></Suspense>
        case 40:
            return <Suspense fallback={<Loading/>}><SuccessPage/></Suspense>
        case -1:
            return <Suspense fallback={<Loading/>}><Card/></Suspense>
        case -100:
        default:
            return <Suspense fallback={<Loading/>}><Error/></Suspense>
    }
}