import React, {useState} from 'react';
import { IntlProvider } from 'react-intl';
import EnglishMessages from './../lang/en-US.json';
import SpanishMessages from './../lang/es-ES.json';

// Creamos un espacio global
const langContext = React.createContext();

const LangProvider = ({children}) => {

    const [messages, setMessages] = useState(EnglishMessages);
    const [locale, setLocale] = useState('en-US');

    const setLanguage = (language) => {
        switch (language) {
            case 'en-US':
                setMessages(EnglishMessages);
                setLocale('en-US');
                break;
            case 'es-ES':
                setMessages(SpanishMessages);
                setLocale('es-ES');
                break;
            default:
                setMessages(EnglishMessages);
                setLocale('en-US');
        }
    }

    return (
        <langContext.Provider value={{setLanguage: setLanguage}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    )
}

export {LangProvider, langContext};