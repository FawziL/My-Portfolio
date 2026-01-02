import "./ButtonDownload.css";
import CVEspañol from "@/assets/CV Fawzi Lutfallah.pdf";
import CVIngles from "@/assets/Fawzi Lutfallah CV.pdf";
import { FormattedMessage, useIntl } from "react-intl";

function ButtonDownload() {
    const intl = useIntl();

    const handleDownload = () => {
        window.open(intl.locale === "es" ? CVEspañol : CVIngles);
    };

    return (
        <button onClick={handleDownload} className="ButtonDownload">
            <FormattedMessage id="buttonDownload" />
        </button>
    );
}

export default ButtonDownload;
