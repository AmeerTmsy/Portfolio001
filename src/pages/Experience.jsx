// src/pages/Experience.jsx

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
  FiTwitter,
} from "react-icons/fi";

const experiences = [
  {
    year: "2023 - PRESENT",
    title: "Senior Full Stack Architect",
    description:
      "Leading the migration of legacy architecture to a modern MERN stack with microservices integration and distributed cloud caching systems.",
    tags: ["Cloud Architecture", "Redis"],
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.7)]",
    dot: "bg-violet-300",
  },

  {
    year: "2022",
    title: "Open Source Contributor",
    description:
      "Core contributions to Node.js performance tooling and React ecosystem state management libraries. Over 1.5k stars on personal repos.",
    tags: ["GitHub", "Node.js Core"],
    glow: "shadow-[0_0_30px_rgba(34,211,238,0.7)]",
    dot: "bg-cyan-300",
  },

  {
    year: "2020 - 2022",
    title: "Software Engineer II",
    description:
      "Engineered real-time collaboration features using Socket.io and implemented automated CI/CD pipelines across multiple enterprise projects.",
    tags: ["Real-time Systems", "DevOps"],
    glow: "shadow-[0_0_30px_rgba(196,181,253,0.7)]",
    dot: "bg-violet-200",
  },
];

const testimonials = [
  {
    quote:"A rare combination of engineering precision and design thinking. The interfaces felt immersive, intuitive, and visually refined across every interaction.",
    name: "Jishnu Menon",
    role: "UI/UX Engineer, Freelancer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },

  {
    quote:
      "The attention to detail in both functionality and user experience was exceptional. Every feature was tested, optimized, and delivered with production-level quality standards.",
    name: "Neenu Peter",
    role: "QA Engineer, Euphoricoders",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },

  {
    quote:
      "The architecture was clean, scalable, and thoughtfully engineered. From frontend animations to backend performance, everything reflected strong full-stack expertise.",
    name: "Fazil Ahammed",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Experience() {
  return (
    <main className="overflow-hidden bg-[#050816] text-white">
      {/* HERO GLOW */}
      <div className="absolute left-[-10%] top-[5%] h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* EXPERIENCE */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12">
        <div className="mb-24 text-center">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
            <span className="text-sm font-semibold tracking-[0.25em] text-violet-200">
              MILESTONES
            </span>
          </div>

          <h2 className="text-5xl font-black tracking-[-0.04em] text-[#f3f4ff] md:text-7xl feat-font">
            Experience Journey
          </h2>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* LINE */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-violet-400 via-cyan-400 to-violet-400 md:left-1/2">
            <div className="absolute inset-0 blur-md" />
          </div>

          <div className="space-y-28">
            {experiences.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start justify-between`}
              >
                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="ml-12 w-5/6 md:ml-0 md:w-[44%]"
                >
                  <div className="rounded-[32px] border border-white/10 bg-[rgba(10,15,35,0.75)] p-4 md:p-8 backdrop-blur-xl">
                    <span className="mb-4 block text-sm font-bold tracking-[0.18em] text-cyan-300">
                      {item.year}
                    </span>
                    <h3 className="mb-5 text-2xl md:text-3xl font-bold tracking-tight text-[#eef2ff]">
                      {item.title}
                    </h3>
                    <p className="mb-6 text-md md:text-lg leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/5 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* DOT */}
                <div
                  className={`absolute left-4 top-10 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#050816] md:left-1/2 ${item.dot} ${item.glow}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#040611] pb-10 pt-10 text-center">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <p className="tracking-[0.1em] text-violet-200 font-light">
            “I wasn’t someone who got into tech suddenly — it has always been part of my personality. I naturally gravitated toward computers, digital tools, and solving technical problems.”
          </p>
        </div>
        </section>
      <section className="relative overflow-hidden border-t border-white/5 bg-[#040611] pb-28 pt-20">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2">
                <span className="text-sm font-semibold tracking-[0.25em] text-violet-200">
                  FEEDBACK
                </span>
              </div>

              <h2 className="text-5xl font-bold tracking-tight md:text-6xl">
                Client Voices
              </h2>
            </div>

            {/* <div className="flex gap-4">
              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all hover:border-violet-400 hover:bg-white/[0.04]">
                <FiChevronLeft />
              </button>

              <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all hover:border-violet-400 hover:bg-white/[0.04]">
                <FiChevronRight />
              </button>
            </div> */}
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className={`rounded-[32px] border border-white/10 bg-[rgba(10,15,35,0.72)] p-10 backdrop-blur-xl flex flex-col `}
              >
                <div className="mb-8 text-5xl font-bold text-violet-300">”</div>
                <p className="mb-12 text-xl italic font-light leading-relaxed text-zinc-300">
                  "{item.quote}"
                </p>

                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-5 w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full border border-violet-400/20 object-cover"
                    />

                    <div>
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-zinc-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-12">
        <div className="grid gap-20 lg:grid-cols-2" id="contact">
          {/* LEFT */}
          <div>
            <h2 className="feat-font max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-[#eef2ff]">
              Let’s craft something exceptional.
            </h2>

            <p className="mt-8 max-w-lg text-2xl leading-relaxed text-zinc-400">
              Currently accepting select freelance inquiries and
              architectural consulting roles.
            </p>

            <form className="mt-14 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 text-lg text-white outline-none transition-all placeholder:text-zinc-500 focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 text-lg text-white outline-none transition-all placeholder:text-zinc-500 focus:border-cyan-400"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project"
                className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.03] px-6 py-5 text-lg text-white outline-none transition-all placeholder:text-zinc-500 focus:border-cyan-400"
              />

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 py-5 text-xl font-semibold transition-all hover:scale-[1.01] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]">
                Send Transmission
                <FiSend />
              </button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="space-y-10 lg:pl-12 flex flex-col">
            <div className="flex-1 flex flex-col justify-center">
              {/* STATUS */}
              <div className="rounded-[28px] border border-white/10 bg-[rgba(10,15,35,0.72)] p-8 backdrop-blur-xl">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                    <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-75" />
                  </div>

                  <div>
                    <span className="text-sm font-bold tracking-[0.18em] text-cyan-300">
                      AVAILABILITY STATUS
                    </span>

                    <p className="mt-1 text-2xl font-semibold text-white">
                      Available for new projects
                    </p>
                  </div>
                </div>
              </div>

              {/* SOCIALS */}
              <div>
                <h3 className="mb-8 text-3xl font-semibold text-violet-200">
                  Connect with the Lab
                </h3>

                <div className="space-y-5">
                  {[
                    {
                      name: "Github",
                      icon: <FiGithub />,
                    },

                    {
                      name: "LinkedIn",
                      icon: <FiLinkedin />,
                    },

                    // {
                    //   name: "Twitter",
                    //   icon: <FiTwitter />,
                    // },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[rgba(10,15,35,0.72)] px-6 py-5 transition-all hover:border-violet-400 hover:bg-white/[0.03]"
                    >
                      <div className="flex items-center gap-5">
                        <div className="text-2xl text-zinc-400 transition-colors group-hover:text-violet-300">
                          {social.icon}
                        </div>
                        <span className="text-xl font-semibold">{social.name}</span>
                      </div>
                      <FiArrowRight className="text-xl text-zinc-500 transition-all group-hover:translate-x-1 group-hover:text-violet-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* DETAILS */}
              <div className="space-y-6 pt-8">
                <div className="flex items-center gap-5 text-zinc-400">
                  <FiMapPin className="text-2xl text-violet-300" />

                  <span className="">
                    Calicut, Keralam, India
                  </span>
                </div>

                <div className="flex items-center gap-5 text-zinc-400">
                  <FiMail className="text-2xl text-violet-300" />

                  <span className="">
                    tmsyameer@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}