import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locals/es.json';
import en from './locals/en.json';

i18n.use(initReactI18next).init({
    resources: {
        es: { translation: es },
        en: { translation: en }
    },
    lng: 'es',        // idioma por defecto
    fallbackLng: 'es', // idioma de respaldo si falla
    interpolation: {
        escapeValue: false
    }
});

export default i18n;