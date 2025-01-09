import { motion } from "framer-motion";
export default function AboutMe() {
  return (
    <div
      id="about"
      className="md:mx-[10vw] mx-5 flex flex-col lg:flex-row lg:gap-[10rem] justify-between items-center sm:flex-col"
    >
      <div className="relative max-w-[250px] md:max-w-[520px] h-auto mx-auto">
        <img src="/my-photo.jpg" alt="my photo " className="invisible" />
        <motion.img
          src="/my-photo.jpg"
          alt="my photo "
          className="absolute top-12 max-w-[150px] md:max-w-[250px] md:top-20 rotate-[-20deg] aboutme-img-shadow"
          initial={{ opacity: 0, rotate: -30 }}
          whileInView={{ opacity: 1, rotate: -20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <motion.img
          src="/my-family.jpg"
          alt="my family picture"
          className="absolute max-w-[150px] md:max-w-[250px] md:left-[12vw] top-0 right-0 rotate-12 aboutme-img-shadow"
          initial={{ opacity: 0, rotate: 20 }}
          whileInView={{ opacity: 1, rotate: 12 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.8 }}
        />
      </div>
      <motion.p
        className="aboutme-text md:max-w-[480px] text-[14px] text-center md:text-left md:text-[20px]"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        Born in Bangladesh and now based in Kamloops, BC, I’m passionate about
        learning new things and exploring technology. As an aspiring full-stack
        web developer, I love solving problems, building user-friendly web
        applications, and turning creative ideas into reality while continuously
        growing to keep up with the ever-evolving tech industry.
      </motion.p>
    </div>
  );
}
