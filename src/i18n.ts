
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import BackEnd from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import getBaseUrl from "./utils/base-url"



i18n
.use(BackEnd)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: getBaseUrl()+"/locals/{{lng}}/{{ns}}.json"
    },
    detection: {
        order: ['localStorage'],
        caches: ['localStorage']
    }
})

export default i18n
