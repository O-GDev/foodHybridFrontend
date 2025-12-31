import React from "react";
import { motion } from "framer-motion";
import pattern from "@/assets/images/patterns.webp";

// Animation config
// const slideIn = {
//   initial: { opacity: 0, x: -80 },
//   whileInView: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
//   },
// };

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: {
//     opacity: 1,
//     transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
//   },
// };

const Root: React.FC = () => {
  return (
    <div className="relative mt-60">
      <div className="section-padding pr-0 flex items-center justify-between w-full overflow-x-hidden">
        <motion.div
          className="space-y-5 w-full sm:max-w-[60%]"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
          // variants={slideIn}
        >
          <div>
            <h1 className="w-[70%] sm:w-full text-[20px] sm:text-[24px] lg:text-[35px] text-[#15221B] font-[600]">
              Rooted in African Tradition
            </h1>
            <div className="h-[1px] w-[40%] bg-[#15221B] relative">
              <div className="size-[8px] bg-[#15221B] rotate-45 absolute right-0 top-[calc(50%-4px)]"></div>
            </div>
          </div>

          <motion.p
            className="sm:text-[18px] lg:text-[24px] text-[#252525]"
            // variants={fadeIn}
          >
            With each product carrying the taste of home, designed to meet the
            needs of Africans diaspora in the United Kingdom🇬🇧 (UK) and beyond.
            Introducing the world to the authentic flavors of the continent.
          </motion.p>
        </motion.div>

        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, delay: 0.6 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={pattern}
            alt=""
            className="w-[150px] h-[150px] sm:size-[278px] lg:size-[480px] rounded-full sm:translate-x-[70px] absolute top-[-100px] right-[-50px] sm:top-0 sm:right-0 sm:relative object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Root;
