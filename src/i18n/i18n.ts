import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';
import no from './no';

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: en },
    no: { translation: no },
  },
  react: {
    useSuspense: true,
  },
});

export default i18next;