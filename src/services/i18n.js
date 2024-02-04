import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from '../locales/en/translation.json'
import HOME_VI from '../locales/vi/translation.json'

const resources = {
  en: {
    home: HOME_EN,
  },
  vi: {
    home: HOME_VI,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home'],
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
