"use client";

import { Linkedin, Mail, Twitter, Code2, Globe, Cpu } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { TypeAnimation } from 'react-type-animation';

const projects = [
  {
    title: "Project Name 1",
    description: "A brief description of the project and its impact.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://demo1.example.com",
    githubLink: "https://github.com/username/project1",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Name 2",
    description: "Another project description showcasing different technologies.",
    tech: ["React", "Node.js", "PostgreSQL"],
    demoLink: "https://demo2.example.com",
    githubLink: "https://github.com/username/project2",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  },
];

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    icon: <Globe className="w-6 h-6" />,
    items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
];

export default function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white relative overflow-hidden">
      <Particles
        className="absolute inset-0 pointer-events-none"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#0A0A0A",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 1 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false,
              },
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Jei Fujinami
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-8 h-[2em]">
              <TypeAnimation
                sequence={[
                  'Fullstack developer',
                  2000,
                  'UI UX designer',
                  2000,
                  'Video grapher',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-center space-x-6">
              {[
                { icon: <GitHubLogoIcon className="w-6 h-6" />, href: "https://github.com/Jay19981112" },
                { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/jei-fujinami-4b5509280/" },
                { icon: <Mail className="w-6 h-6" />, href: "mailto:jeifujinami1112@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="hover:text-blue-500 transition-colors p-2 hover:bg-white/10 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="relative py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="py-28 px-8 border-t border-b border-white/10">
            <h2 className="text-3xl mb-8 text-white font-quicksand">
              「 About Me 」
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Fullstack developer based in Japan.
              I specialize in developing intuitive and user-friendly products using React, Next.js, TypeScript, Prisma, and PostgreSQL.
              <br /><br />
              Currently, I'm working on e-commerce site development, customer support system construction, and AI-related technology research,
              while also advancing my knowledge of serverless architecture with AWS and Deep Learning.
              <br /><br />
              In addition, I'm interested in design, video editing, and marketing,
              with a motto of 'creating products that combine simple, sophisticated design with excellent user experience.'
            </p>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="relative py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-white font-quicksand">
            「 Skills 」
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="bg-[#0A0A0A] py-16 px-8 border-l border-white/10 hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-start gap-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-medium tracking-wide">{skillGroup.category}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skillGroup.items.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="relative py-32 px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-white font-quicksand">
            「 Projects 」
          </h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group bg-white/5 border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.demoLink}
                      className="text-white hover:text-blue-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Demo →
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      className="text-white hover:text-purple-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      GitHub →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}