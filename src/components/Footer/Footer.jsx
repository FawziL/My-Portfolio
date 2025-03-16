import "./Footer.css";
import { FormattedMessage } from "react-intl";

function Footer() {
    return (
        <footer>
            <hr />
            <p>
                © 2023-2025 [Fawzi Lutfallah] - <FormattedMessage id="rights" />
            </p>
        </footer>
    );
}

export default Footer;
