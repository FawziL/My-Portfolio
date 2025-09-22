import "./Services.css";
import CardService from "@/components/CardService/CardService.jsx";
import { FormattedMessage } from "react-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Services() {
    const h2Ref = useRef(null);
    const isInView = useInView(h2Ref, { once: true });
    return (
        <div id="Services">
            <motion.h2
                ref={h2Ref}
                initial={{ x: "-50%", opacity: 0 }} // Comienza fuera de la pantalla arriba
                animate={
                    isInView
                        ? {
                              x: 0,
                              opacity: 1,
                              transition: { type: "tween", duration: 1 },
                          }
                        : {}
                }
                exit={{ opacity: 0 }} // Opción para hacer que desaparezca si se sale de vista
            >
                <FormattedMessage id="services" />
            </motion.h2>

            <p className="text">
                <FormattedMessage id="servicePresentation" />
            </p>

            <div className="dFlexService">
                <CardService
                    titleService={<FormattedMessage id="serviceTitle1" />}
                    textService={<FormattedMessage id="serviceText1" />}
                />

                <CardService
                    titleService={<FormattedMessage id="serviceTitle2" />}
                    textService={<FormattedMessage id="serviceText2" />}
                />

                <CardService
                    titleService={<FormattedMessage id="serviceTitle3" />}
                    textService={<FormattedMessage id="serviceText3" />}
                />

                <CardService
                    titleService={<FormattedMessage id="serviceTitle4" />}
                    textService={<FormattedMessage id="serviceText4" />}
                />

                <CardService
                    titleService={<FormattedMessage id="serviceTitle5" />}
                    textService={<FormattedMessage id="serviceText5" />}
                />
            </div>
        </div>
    );
}

export default Services;
