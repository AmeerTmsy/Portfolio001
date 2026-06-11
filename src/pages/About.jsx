import { motion } from "framer-motion";
import {
  FaCode,
  FaUsers,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { HiRocketLaunch } from "react-icons/hi2";
import { TbBrandFramerMotion } from "react-icons/tb";
import { LuBuilding2, LuServer } from "react-icons/lu";
import { CiTimer } from "react-icons/ci";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejsSmall } from "react-icons/di";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    icon: <FaCode />,
    value: "5",
    title: "Projects Built",
    color: "text-[#c9a7ff]",
  },

  {
    icon: <HiRocketLaunch />,
    value: "99%",
    title: "Success Rate",
    color: "text-[#2fe0ff]",
  },

  {
    icon: <LuBuilding2 />,
    value: "Company",
    title: "Global Clients",
    color: "text-[#b8c7ff]",
  },

  {
    icon: <CiTimer />,
    value: "1yr",
    title: "Experience",
    color: "text-[#c9a7ff]",
  },
];

const skills = [
  {
    icon: <FaReact />,
    title: "React.js",
    desc: "Building component-driven UIs with sophisticated state management and performance hooks.",
    level: "95%",
    badge: "Expert",
    progress: "95%",
    color: "bg-[#c9a7ff]",
  },

  {
    icon:  <SiExpress />,
    title: "Express.js",
    desc: "Building scalable Express.js APIs with middleware, real-time services, and high-performance backend architecture.",
    level: "90%",
    badge: "Advanced",
    progress: "90%",
    color: "bg-[#2fe0ff]",
  },

  {
    icon: <DiNodejsSmall />,
    title: "Node.js",
    desc: "Architecting secure, event-driven RESTful APIs and real-time microservices architectures.",
    level: "88%",
    badge: "Senior",
    progress: "88%",
    color: "bg-[#b8c7ff]",
  },

  {
    icon: <RiTailwindCssFill />,
    title: "Tailwind CSS",
    desc: "Crafting responsive, utility-first interfaces with Tailwind CSS for fast, scalable, and consistent UI development.",
    level: "94%",
    badge: "Expert",
    progress: "94%",
    color: "bg-[#c9a7ff]",
  },

  {
    icon: <SiMongodb />,
    title: "MongoDB",
    desc: "Designing scalable NoSQL schemas and optimizing complex aggregation pipelines for high loads.",
    level: "92%",
    badge: "Expert",
    progress: "92%",
    color: "bg-[#2fe0ff]",
  },

  {
    icon: <TbBrandFramerMotion />,
    title: "Framer Motion",
    desc: "Creating immersive, cinematic interactions that breathe life into static interfaces.",
    level: "85%",
    badge: "Artistic",
    progress: "85%",
    color: "bg-[#b8c7ff]",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export default function About() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background */}
      <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* ================= ABOUT ================= */}
      <div className="mx-auto max-w-7xl border-b border-white/5 px-6 py-28 md:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT STATS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-7"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className={`rounded-[28px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl ${index === 1 || index === 3 ? "mt-10" : ""
                  }`}
              >
                <div
                  className={`mb-8 text-4xl ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3
                  className={`mb-2 text-4xl font-black tracking-tight ${item.color}`}
                >
                  {item.value}
                </h3>

                <p className="text-lg font-semibold text-zinc-300">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.35em] text-[#2fe0ff]">
              The Architect
            </p>

            <h2 className="feat-font max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-[#e7e4ff] md:text-5xl">
              Crafting high-performance digital ecosystems.
            </h2>

            <div className="mt-10 h-[4px] w-2/3 rounded-full bg-gradient-to-r from-[#c9a7ff] via-[#c9a7ff80] to-transparent" />

            <div className="mt-10 space-y-8 text-[1.1rem] leading-[1.9] text-[#b3b3cc]">
              <p>
                I specialize in bridging the gap between
                sophisticated aesthetics and robust technical
                architecture. As a MERN stack specialist, I don't
                just build websites; I engineer scalable experiences
                that prioritize speed, security, and user-centric
                logic.
              </p>

              <p>
                My approach is rooted in the philosophy of "digital
                craftsmanship." Every line of code is written with
                intent, ensuring that the final product is as elegant
                under the hood as it is on the surface. From complex
                MongoDB schemas to reactive Next.js interfaces, I
                deliver solutions that scale.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap gap-5">
              <button onClick={()=> navigate('/experience#contact')} className="rounded-2xl bg-[#a970ff] px-10 py-5 text-lg font-bold text-[#130424] transition hover:scale-[0.98]">Start a Project</button>
              {/* <button className="rounded-2xl border border-white/10 bg-transparent px-10 py-5 text-lg font-bold text-white transition hover:bg-white/5">My Philosophy</button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        {/* Heading */}
        <div className="mx-auto mb-24 max-w-3xl text-center">
          <h2 className="feat-font text-5xl font-black tracking-tight text-[#e7e4ff]">Technological Arsenal</h2>
          <p className="mx-auto mt-8 max-w-2xl text-[1.1rem] leading-[1.8] text-[#b3b3cc]">
            A specialized toolkit refined through years of
            intensive full-stack development and architectural
            design.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="rounded-[30px] border border-white/10 bg-[#070f2a]/70 p-10 backdrop-blur-xl flex flex-col"
            >
              {/* TOP */}
              <div className="mb-12 flex items-start justify-between">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#161d3d] text-4xl text-[#c9a7ff]">
                  {skill.icon}
                </div>

                <div className="rounded-full bg-[#161d3d] px-5 py-2 text-sm font-bold text-[#c9a7ff]">
                  {skill.badge}
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-4xl font-black tracking-tight text-[#e7e4ff]">
                {skill.title}
              </h3>

              <p className="mt-6 text-[1.15rem] leading-[1.9] text-[#b3b3cc]">
                {skill.desc}
              </p>

              {/* PROGRESS */}
              {/* <div className="mt-12 flex-1 flex flex-col justify-end">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#d6d6e8]">
                    Proficiency
                  </span>

                  <span className="text-lg font-bold text-[#d6d6e8]">
                    {skill.level}
                  </span>
                </div>

                <div className="">
                  <div className="h-[6px] overflow-hidden rounded-full bg-[#1b2345]">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: skill.progress,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      viewport={{ once: true }}
                      className={`h-full ${skill.color}`}
                    />
                  </div>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#070f2a]/70 p-1 backdrop-blur-xl">
          <div className="overflow-hidden rounded-[32px]">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2070&auto=format&fit=crop"
              alt="workspace"
              className="h-[520px] w-full object-cover opacity-60 transition duration-700 hover:scale-105 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}