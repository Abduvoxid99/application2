import {tokens} from "../tokens"
import {lang} from "../LanguageContext"

export const handleRedirect = () => {
    window.location.replace(`${window.location.origin}/hamkor-store?lang=${lang}&ctoken=${tokens.ctoken}&oauth=${tokens.oauth}`)
}

