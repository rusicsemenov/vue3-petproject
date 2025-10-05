import { createI18n } from 'vue-i18n';

import { en } from './enJson';
import { de } from './deJson';
import { ru } from './ruJson';

export const availableLocales = ['en', 'de', 'ru'];

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en,
        de,
        ru,
    },
});

export default i18n;
