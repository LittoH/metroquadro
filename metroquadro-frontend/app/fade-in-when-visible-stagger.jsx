'use client';

import { motion } from "framer-motion";

export const FadeInWhenVisibleStagger = ({ children }) => (

    <>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{duration: 0.3, delay: 0.5, staggerChildren: 0.5}}
            variants={{
                visible: {opacity: 1, scale: 1, y: 0},
                hidden: {opacity: 0, scale: 1, y: 15}
            }}
        >
            {children}
        </motion.div>
    </>

);