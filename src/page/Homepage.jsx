import NavBar from "@/components/NavBar/NavBar";
import Home from "@/components/Home/Home";
import ProyectsContainer from "@/components/ProyectsContainer/ProyectsContainer";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

const LandingPage = ({ locale, darkMode, toggleTheme, handleLanguage }) => {
    return (
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <NavBar
                toggleTheme={toggleTheme}
                darkMode={darkMode}
                handleLanguage={handleLanguage}
                locale={locale}
            />
            <section id="homeVh">
                <Home />
            </section>
            <section className="vh">
                <ProyectsContainer locale={locale} />
            </section>
            <section className="vh">
                <Services />
            </section>
            <section className="vh">
                <Skills locale={locale} />
            </section>
            <section className="vh">
                <Contact />
            </section>
        </div>
    );
};

export default LandingPage;
