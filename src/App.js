import {useEffect} from "react"
import {useDispatch} from "react-redux"

import {getProduct} from "./redux/actions/application"
import {ScreenSwitcher} from "./screens/ScreenSwitcher"

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    return (
        <ScreenSwitcher/>
    )
}

export default App
