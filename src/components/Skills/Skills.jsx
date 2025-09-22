import "./Skills.css";
import SkillsLearned from "@/components/SkillsLearned/SkillsLearned.jsx";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import { getTecnologies } from "@/data/info.js";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Skills({ locale }) {
    const [tecnologies, setTecnologies] = useState([]);
    const [expandedSkills, setExpandedSkills] = useState([]); // Estado para controlar cuáles elementos están expandidos
    const h2Ref = useRef(null);
    const isInView = useInView(h2Ref, { once: true });

    useEffect(() => {
        getTecnologies()
            .then((produc) => {
                setTecnologies(produc);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const toggleExpand = (id) => {
        setExpandedSkills((prevState) =>
            prevState.includes(id)
                ? prevState.filter((expandedId) => expandedId !== id)
                : [...prevState, id]
        );
    };

    return (
        <div id="Skills">
            <motion.h2
                ref={h2Ref}
                initial={{ x: "-70%", opacity: 0 }} // Comienza fuera de la pantalla arriba
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
                <FormattedMessage id="skills" />
            </motion.h2>
            <p className="text">
                <FormattedMessage id="skillPresentation" />
            </p>

            <div className="dFlexSkills">
                {tecnologies.map((tecnols, index) => (
                    <SkillsLearned
                        key={tecnols.id}
                        {...tecnols}
                        locale={locale}
                        isExpanded={expandedSkills.includes(tecnols.id)}
                        toggleExpand={toggleExpand}
                    />
                ))}
            </div>
        </div>
    );
}

export default Skills;