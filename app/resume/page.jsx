import React from 'react'
import Left from '../components/Left'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

// Put this file in /public with exactly this name (filenames are case-sensitive on Vercel)
const RESUME_FILE = '/Manish_Suriyal_Full_Stack_Developer_resume.pdf'

const experience = [
    {
        role: 'Full Stack Developer',
        company: 'Offbeat Pixels',
        period: 'Jul 2026 - Oct 2026',
        points: [
            'Built and maintained production Full Stack features with React.js, Next.js, TypeScript, Node.js, MongoDB and Tailwind CSS across the SDLC, improving UI responsiveness by 25%.',
            'Automated deployments with CI/CD pipelines in GitHub Actions and debugged REST API issues in Express.js and Node.js, cutting bug resolution time by 15%.',
            'Contributed to code reviews and containerized applications with Docker and Kubernetes for consistent cloud infrastructure across development and production.',
        ],
    },
    {
        role: 'Software Engineer Intern',
        company: 'YugaYatra Retail (OPC) Private Limited',
        period: 'May 2026 - Jul 2026',
        points: [
            'Delivered React.js and Next.js frontend features 20% faster using AI-assisted development tools.',
            'Built and integrated REST API endpoints with Node.js and Express.js, connecting frontend, backend and database layers in a Full Stack system architecture.',
            'Modeled PostgreSQL and Supabase schemas and managed Docker containers, improving data retrieval speed by 30%.',
        ],
    },
]

const projects = [
    {
        name: 'Explain This Diff (Chrome Extension)',
        date: 'Mar 2026',
        tech: 'JavaScript, Manifest V3, Node.js, Express.js, Groq AI',
        link: 'https://github.com/manish012321',
        points: [
            'Built a Full Stack Manifest V3 Chrome extension that adds AI-generated summaries to GitHub pull requests, reducing code review time by 40%.',
            'Created an Express.js REST API proxy to secure Groq AI credentials; SHA-256 caching cut redundant API calls by 50%.',
        ],
    },
    {
        name: 'AI-Powered SOP Generator (MERN Stack)',
        date: 'Jan 2026',
        tech: 'Zustand, Gemini AI, JWT',
        link: 'https://github.com/manish012321/SOP-Generator',
        points: [
            'Architected a Full Stack MERN application that turns process descriptions into Standard Operating Procedures (SOPs) with the Gemini AI API, using Zustand for state management.',
            'Implemented JWT authentication, multi-tenant workspaces with MongoDB and PDF export; deployed on Vercel (frontend) and Render (backend).',
        ],
    },
]

const skills = [
    { label: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'] },
    { label: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'React Router', 'Zustand', 'Responsive Design'] },
    { label: 'Backend', items: ['Node.js', 'Express.js', 'REST API', 'API Development', 'System Architecture', 'JWT Authentication'] },
    { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'Supabase', 'Database Design', 'Schema Design'] },
    { label: 'DevOps & Cloud', items: ['CI/CD', 'Docker', 'Kubernetes', 'GitHub Actions', 'Git', 'Vercel', 'Render', 'Cloud Deployment', 'Postman'] },
    { label: 'Methodologies', items: ['Agile', 'Scrum', 'SDLC', 'Code Review'] },
    { label: 'AI Tools', items: ['Google Gemini', 'Groq AI', 'LLM Integration', 'AI-Assisted Development', 'Prompt Engineering'] },
]

const contactLink = 'flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors'
const sectionTitle = 'text-lg font-semibold text-gray-900 dark:text-white'
const timelineBox = 'mt-4 pl-4 border-l-2 border-zinc-200 dark:border-zinc-700'

const Bullets = ({ points }) => (
    <ul className='mt-3 space-y-1.5 list-disc pl-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
        {points.map((p) => (
            <li key={p}>{p}</li>
        ))}
    </ul>
)

const page = () => {
    return (
        <section className='dark:bg-zinc-900 min-h-screen w-full md:flex'>

            <Left />

            {/* Right Content */}
            <div className='md:w-3/5 p-4 md:p-8'>

                <div className='rounded-none md:rounded-xl border-y md:border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-[#0D1117]'>

                    {/* Header */}
                    <div className='flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 md:rounded-t-xl'>

                        <div className='flex gap-1.5'>
                            <span className='w-3 h-3 rounded-full bg-red-400' />
                            <span className='w-3 h-3 rounded-full bg-yellow-400' />
                            <span className='w-3 h-3 rounded-full bg-green-400' />
                        </div>

                        <p className='text-xs font-mono text-gray-500 dark:text-gray-400 ml-2'>
                            manishsuriyal/
                            <span className='text-gray-800 dark:text-gray-200'>Resume</span>
                            <span className='text-gray-400'>.md</span>
                        </p>

                    </div>

                    {/* Resume Content */}
                    <div className='p-5 md:p-8'>

                        {/* Profile */}
                        <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-5'>

                            <div>

                                <h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'>
                                    Manish Suriyal
                                </h1>

                                <p className='text-blue-500 dark:text-blue-400 mt-1 font-medium'>
                                    Full Stack Developer
                                </p>

                                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                    Dehradun, Uttarakhand, India
                                </p>

                                <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xl leading-relaxed'>
                                    Full Stack Developer skilled in JavaScript, TypeScript, React.js,
                                    Next.js and Node.js. Experienced in REST API development, database
                                    design, cloud deployment and CI/CD pipelines. Built and shipped an
                                    AI-powered Chrome extension and a MERN-stack SOP generator. Seeking
                                    a remote Full Stack Developer role.
                                </p>

                            </div>

                            {/* Resume Buttons */}
                            <div className='flex flex-wrap gap-2 shrink-0'>

                                <a
                                    href={RESUME_FILE}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium transition-colors'
                                >
                                    <ExternalLink size={15} />
                                    View Resume
                                </a>

                                <a
                                    href={RESUME_FILE}
                                    download
                                    className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors'
                                >
                                    <span className='text-base'>↓</span>
                                    Download Resume
                                </a>

                            </div>

                        </div>

                        {/* Contact */}
                        <div className='flex flex-wrap gap-4 mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-700'>

                            <a href='mailto:manishsuriyal21@gmail.com' className={contactLink}>
                                <span>✉</span>
                                Email
                            </a>

                            <a href='tel:+919411393411' className={contactLink}>
                                <span>✆</span>
                                +91-9411393411
                            </a>

                            <Link href='https://github.com/manish012321' target='_blank' className={contactLink}>
                                <span>GH</span>
                                GitHub
                            </Link>

                            <Link href='https://www.linkedin.com/in/manish-suriyal-dev/' target='_blank' className={contactLink}>
                                <span>in</span>
                                LinkedIn
                            </Link>

                            <Link href='https://manishsuriyal.dev' target='_blank' className={contactLink}>
                                <span>🌐</span>
                                manishsuriyal.dev
                            </Link>

                        </div>

                        {/* Experience */}
                        <div className='mt-8'>

                            <h2 className={sectionTitle}>Experience</h2>

                            <div className='space-y-6'>
                                {experience.map((job) => (
                                    <div key={job.company} className={timelineBox}>

                                        <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                            {job.role}
                                        </h3>

                                        <p className='text-sm text-blue-500 dark:text-blue-400 mt-1'>
                                            {job.company}
                                        </p>

                                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                            {job.period}
                                        </p>

                                        <Bullets points={job.points} />

                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Education */}
                        <div className='mt-8'>

                            <h2 className={sectionTitle}>Education</h2>

                            <div className={timelineBox}>

                                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                    B.Sc. in Information Technology
                                </h3>

                                <p className='text-sm text-blue-500 dark:text-blue-400 mt-1'>
                                    DAV PG College
                                </p>

                                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                    Dehradun, Uttarakhand · Sep 2023 - Aug 2026
                                </p>

                                <p className='text-sm text-gray-500 dark:text-gray-400 mt-2'>
                                    CGPA: 7.1 / 10
                                </p>

                                <p className='text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed'>
                                    Coursework: Data Structures & Algorithms, Object-Oriented
                                    Programming, Database Management Systems, Operating Systems,
                                    Web Technologies
                                </p>

                            </div>

                        </div>

                        {/* Skills */}
                        <div className='mt-8'>

                            <h2 className={sectionTitle}>Technical Skills</h2>

                            <div className='mt-4 space-y-4'>
                                {skills.map((group) => (
                                    <div key={group.label}>

                                        <p className='text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                                            {group.label}
                                        </p>

                                        <div className='flex flex-wrap gap-2 mt-2'>
                                            {group.items.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className='text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono'
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Projects */}
                        <div className='mt-8'>

                            <h2 className={sectionTitle}>Projects</h2>

                            <div className='mt-4 space-y-6'>
                                {projects.map((project) => (
                                    <div key={project.name}>

                                        <div className='flex items-center justify-between gap-2'>

                                            <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                                {project.name}
                                            </h3>

                                            <Link
                                                href={project.link}
                                                target='_blank'
                                                className='text-gray-500 hover:text-blue-400 transition-colors'
                                            >
                                                <ExternalLink size={14} />
                                            </Link>

                                        </div>

                                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                            {project.date} · <span className='font-mono'>{project.tech}</span>
                                        </p>

                                        <Bullets points={project.points} />

                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* Download Button Bottom */}
                        <div className='mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700'>

                            <a
                                href={RESUME_FILE}
                                download
                                className='w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors'
                            >
                                <span>↓</span>
                                Download PDF Resume
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default page