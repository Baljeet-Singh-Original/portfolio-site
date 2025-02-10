import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Code, ChevronRight } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollYProgress } = useScroll();
    const isBrowser = typeof window !== "undefined";

    // Handle mouse movement for interactive effects
    useEffect(() => {
        const handleMouseMove = (e: { clientX: number, clientY: number }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Intersection Observer for section detection
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));
        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

    // Tech-inspired grid background
    const gridStyle = {
        backgroundImage: `
      linear-gradient(to right, rgba(0, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
    `,
        backgroundSize: '50px 50px'
    };

    // Experience data
    const experience = [
        {
            role: "Software Development Engineer",
            company: "Assetplus, Chennai",
            period: "January 2022 - Present",
            description: "Worked on diverse projects, integrating APIs, developing dashboards, and enhancing mobile/web applications.",
            achievements: [
                "Integrated Insurance Products (Care & Nivabupa) in App/Web",
                "Developed Ledger System with ICICI APIs using 2FA Auth.",
                "Created Analytics Dashboards with AWS Cloudwatch and Grafana",
                "Implemented Maker-Checker System with Google Authenticator",
                "Integrated APIs for MFC CAS, ICICI Payments, and more"
            ]
        },
        {
            role: "Fellow",
            company: "Hyperverge Academy, Remote",
            period: "March 2021 - August 2021",
            description: "Completed fellowship in Full-Stack Development, gaining hands-on project experience.",
            achievements: [
                "Built full-stack projects demonstrating MERN stack proficiency",
                "Enhanced teamwork and problem-solving skills"
            ]
        }
    ];

    // Education data
    const education = [
        {
            degree: "Bachelor of Computer Applications",
            school: "Rabindranath Tagore University",
            period: "June 2021 - May 2024",
            highlights: [
                "Focused on core software development concepts"
            ]
        },
        {
            degree: "Diploma in Web and Software Development",
            school: "Navgurukul, Himachal Pradesh",
            period: "August 2020 - February 2021",
            highlights: [
                "Developed web applications and enhanced coding skills",
                "Mentored 22 students, served as Discipline & Placement Coordinator"
            ]
        }
    ];

    const projects = [
        {
            name: "Social App For Developers",
            description: "A social platform where developers can communicate, including authentication, profiles, and forums.",
            tech: "React.js, Node.js, Express.js, MongoDB, JWT",
            gitLink: "https://github.com/Baljeet-Singh-Original/BaljeetVerse-Social-Plateform",
            link: "https://tech-media-platform-ui.onrender.com"
        },
        {
            name: "Bus-Booking Website",
            description: "A platform for booking bus tickets with seat selection and easy checkout.",
            tech: "React.js, Node.js, Express.js, MongoDB, JWT",
            gitLink: "https://github.com/Baljeet-Singh-Original/Bus-Booking-Project"
        }
    ];

    const skills = [
        "Typescript (MERN)", "Python & C++", "MongoDB Aggregation", "Flutter", "AWS", "Appsmith", "Docker", "mWeb", "Reconciliation", "2FA Authentication", "Cryptography", "TS NPM Library", "Deeplinks"
    ];

    return (
        <div className="min-h-screen bg-black overflow-hidden">
            {/* Futuristic Grid Background */}

            <div
                className="fixed inset-0 pointer-events-none"
                style={gridStyle}
            >
                {/* Animated tech circles */}
                {isBrowser && [...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-cyan-500 opacity-20"
                        animate={{
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                            scale: [0, 1, 0],
                            opacity: [0, 0.2, 0]
                        }}
                        transition={{
                            duration: Math.random() * 15 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: Math.random() * 200 + 50 + 'px',
                            height: Math.random() * 200 + 50 + 'px',
                        }}
                    />
                ))}

                {/* Glowing cursor follower */}
                <motion.div
                    className="absolute w-96 h-96 rounded-full pointer-events-none"
                    animate={{
                        x: mousePosition.x - 192,
                        y: mousePosition.y - 192,
                    }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    style={{
                        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)',
                    }}
                />
            </div>

            {/* Navigation Bar */}
            <motion.nav
                className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg border-b border-cyan-900"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <motion.div
                            className="text-2xl font-bold text-cyan-500"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Code className="inline-block mr-2" />
                            Baljeet Singh
                        </motion.div>

                        <div className="hidden md:flex space-x-1">
                            {sections.map((section) => (
                                <motion.a
                                    key={section}
                                    href={`#${section}`}
                                    className={`px-4 py-2 rounded-md text-sm font-medium relative overflow-hidden
                    ${activeSection === section ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                    {activeSection === section && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                                            layoutId="navunderline"
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 transform origin-left z-50"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Hero Section */}
            <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative">
                <div className="text-center">
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-cyan-500">Full Stack</span> Developer
                    </motion.h1>

                    <motion.div
                        className="text-xl text-gray-400 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Building the future of web & mobile applications
                        <div className="mt-6 space-x-4">
                            <a href="mailto:baljeetsinghoriginal@gmail.com" className="text-cyan-400">Email</a>
                            <a href="https://www.linkedin.com/in/baljeet~" target="_blank" rel="noopener noreferrer" className="text-cyan-400">LinkedIn</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen py-20 px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-cyan-500"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="bg-gray-900 p-8 rounded-2xl border border-cyan-900"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-300 mb-6">
                            I am Baljeet Singh, passionate about software development with expertise in MERN stack, Flutter, AWS, and more. I thrive on solving complex problems and building impactful applications.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">What I Do</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>✓ Full Stack Development</li>
                                    <li>✓ Mobile App Development</li>
                                    <li>✓ Cloud Architecture</li>
                                    <li>✓ Third Party Integrations</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-cyan-400 mb-4">Tech Stack</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>✓ MERN Stack</li>
                                    <li>✓ Flutter</li>
                                    <li>✓ AWS & Firebase</li>
                                    <li>✓ Docker & Kubernetes</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen py-20 px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-16 text-cyan-500"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & Education
                </motion.h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Work Experience */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-8">Work Experience</h3>
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-900 p-6 rounded-xl border border-cyan-900"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                                <p className="text-cyan-400 mb-2">{exp.company} | {exp.period}</p>
                                <p className="text-gray-400 mb-4">{exp.description}</p>
                                <ul className="space-y-2">
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i} className="text-gray-400 flex items-start">
                                            <ChevronRight className="text-cyan-500 mr-2 h-5 w-5 mt-1" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-cyan-400 mb-8">Education</h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-900 p-6 rounded-xl border border-cyan-900"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                <p className="text-cyan-400 mb-2">{edu.school} | {edu.period}</p>
                                <ul className="space-y-2">
                                    {edu.highlights.map((highlight, i) => (
                                        <li key={i} className="text-gray-400 flex items-start">
                                            <ChevronRight className="text-cyan-500 mr-2 h-5 w-5 mt-1" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
            <section id="projects" className="py-20 text-white">
                <h2 className="text-4xl font-bold text-center text-cyan-500 mb-8">Projects</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="p-6 bg-gray-800 rounded-xl">
                            <h3 className="text-xl font-bold text-cyan-400">{project.name}</h3>
                            <p>{project.description}</p>
                            <p className="text-sm text-gray-400">Tech: {project.tech}</p>
                            {
                                project.link && <a href={project.link} target="_blank" className="text-cyan-400 pr-8">View Project</a>
                            }
                            <a href={project.gitLink} target="_blank" className="text-cyan-400">View Source Code</a>
                        </div>
                    ))}
                </div>
            </section>
            <section id="skills" className="py-20 text-center text-gray-300">
                <h2 className="text-4xl font-bold text-cyan-500 mb-6">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <span key={index} className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400">{skill}</span>
                    ))}
                </div>
            </section>
            <section id="contact" className="py-20 text-center text-gray-300">
                <h2 className="text-4xl font-bold text-cyan-500 mb-4">Contact</h2>
                <p>Email: <a href="mailto:baljeetsinghoriginal@gmail.com" className="text-cyan-400">baljeetsinghoriginal@gmail.com</a></p>
                <p>Phone: <a href="tel:+919670826753" className="text-cyan-400">+91 9670826753</a></p>
                <p>Github: <a href="https://github.com/Baljeet-Singh-Original" target="_blank" className="text-cyan-400">Baljeet-Singh-Original</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/baljeet~/" target="_blank" className="text-cyan-400">baljeet-singh-original</a></p>
                <p>Address: H. no. 6, S. no. 2, Rashid Market, Krishna Nagar, Delhi - 110051</p>
            </section>
            {/* Rest of the sections remain the same but with updated styling to match the new theme */}
            {/* ... */}

        </div>
    );
};

export default Portfolio;