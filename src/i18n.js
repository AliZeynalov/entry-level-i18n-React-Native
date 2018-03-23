import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import i18nextReactNative from 'i18next-react-native-language-detector'
import XHR from 'i18next-xhr-backend';

i18n
    .use(XHR)
    .use(i18nextReactNative)
    .use(reactI18nextModule)
    .init({
        // backend: {
        //     loadPath: 'https://api.ufssalespro.com/lang/en/menu.json',
        // },
        fallbackLng: 'en',

        resources: {
            en: {
                "entryPage": {
                    "simpleText": "this is simple text",
                    "goToPage2": "Page 2"

                },
                "secondPage": {
                    "cancelBtn": "Cancel",
                    "saveBtn": "Save",
                    "addBtn": "Add",
                    "back2SecondPage": "Back to Page 2",
                    "text": "This is second page"
                },
            },
            de: {
                "entryPage": {
                    "simpleText": "Das ist einfacher Text"

                },
                "secondPage": {
                    "cancelBtn": "Stornieren",
                    "saveBtn": "sparen",
                    "addBtn": "Hinzufügen",
                    "back2SecondPage": "Zurück zu Seite 2",
                    "text": "Dies ist die zweite Seite"
                }
            },
            fr: {
                "entryPage": {
                    "simpleText": "c'est un texte simple"
                },
                "secondPage": {
                    "cancelBtn": "Annuler",
                    "saveBtn": "sauvegarder",
                    "addBtn": "Ajouter",
                    "back2SecondPage": "Retour à la page 2",
                    "text": "sa deuxième page"
                },
            }
        },

        ns: ['entryPage'],
        defaultNS: 'entryPage',

        // // have a common namespace used around the full app
        // ns: ['common'],
        // defaultNS: 'common',

        debug: true
        //
        // // cache: {
        // //   enabled: true
        // // },
        //
        // interpolation: {
        //     escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        // }
    });


export default i18n;
