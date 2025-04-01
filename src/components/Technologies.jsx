import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiAdobexd,
  SiFigma,
  SiCanva,
  SiElementor,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiVite,
  SiWordpress,
  SiPrestashop,
  SiMysql,
  SiGoogleanalytics,
  SiGoogleads,
  SiGoogletagmanager,
  SiMeta,
  SiMailchimp,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const tools = [
    { id: "figma", component: <SiFigma className="text-7xl text-purple-500" />, name: "Figma", duration: 4 },
    { id: "adobexd", component: <SiAdobexd className="text-7xl text-pink-500" />, name: "Adobe XD", duration: 5 },
    { id: "canva", component: <SiCanva className="text-7xl text-blue-500" />, name: "Canva", duration: 3 },
    { id: "elementor", component: <SiElementor className="text-7xl text-red-500" />, name: "Elementor", duration: 6 },
    { id: "html", component: <SiHtml5 className="text-7xl text-orange-500" />, name: "HTML", duration: 4 },
    { id: "css", component: <SiCss3 className="text-7xl text-blue-500" />, name: "CSS", duration: 5 },
    { id: "javascript", component: <SiJavascript className="text-7xl text-yellow-500" />, name: "JavaScript", duration: 3 },
    { id: "react", component: <RiReactjsLine className="text-7xl text-cyan-500" />, name: "React", duration: 6 },
    { id: "nodejs", component: <SiNodedotjs className="text-7xl text-green-500" />, name: "Node.js", duration: 4 },
    { id: "vite", component: <SiVite className="text-7xl text-purple-500" />, name: "Vite+", duration: 5 },
    { id: "wordpress", component: <SiWordpress className="text-7xl text-blue-700" />, name: "WordPress", duration: 3 },
    { id: "prestashop", component: <SiPrestashop className="text-7xl text-pink-700" />, name: "PrestaShop", duration: 6 },
    { id: "mysql", component: <SiMysql className="text-7xl text-blue-600" />, name: "SQL", duration: 4 },
    { id: "mongodb", component: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB", duration: 5 },
    { id: "googletagmanager", component: <SiGoogletagmanager className="text-7xl text-blue-500" />, name: "Google Tag Manager", duration: 3 },
    { id: "googleads", component: <SiGoogleads className="text-7xl text-yellow-400" />, name: "Google Ads", duration: 6 },
    { id: "meta", component: <SiMeta className="text-7xl text-blue-600" />, name: "Meta Ads", duration: 4 },
    { id: "mailchimp", component: <SiMailchimp className="text-7xl text-yellow-500" />, name: "Mailchimp", duration: 5 },
    { id: "googleanalytics", component: <SiGoogleanalytics className="text-7xl text-orange-500" />, name: "Google Analytics", duration: 3 },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Herramientas
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {tools.map((tool) => (
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(tool.duration)}
            key={tool.id}
            data-tooltip-id={tool.id}
            data-tooltip-content={tool.name}
          >
            {tool.component}
            <Tooltip id={tool.id} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
