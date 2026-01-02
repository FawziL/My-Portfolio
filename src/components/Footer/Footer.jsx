import "./Footer.css";
import { FormattedMessage } from "react-intl";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <hr />
            <p>
                © {currentYear} [Fawzi Lutfallah] - <FormattedMessage id="rights" />
            </p>
        </footer>
    );
}

export default Footer;
