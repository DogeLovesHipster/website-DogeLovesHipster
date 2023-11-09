import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewpoint={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
        >
            <Component />
        </motion.section>
    )
}

export default SectionWrapper