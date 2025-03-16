import "./App.css";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import LandingPage from "./page/Homepage";
import enMessages from "./en.json";
import esMessages from "./es.json";

function App() {
    const [darkMode, setTheme] = useState(true);
    const toggleTheme = () => {
        setTheme(!darkMode);
    };

    const [locale, setLocale] = useState("en");

    function handleLanguage() {
        setLocale(locale === "en" ? "es" : "en");
    }
    return (
        <IntlProvider
            locale={locale}
            messages={locale === "en" ? enMessages : esMessages}
        >
            <LandingPage
                locale={locale}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
                handleLanguage={handleLanguage}
            />
        </IntlProvider>
    );
}

export default App;
