
import React from 'react'
import Left from '../components/Left'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

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
                            <span className='text-gray-800 dark:text-gray-200'>
                                Resume
                            </span>
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

                                <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xl leading-relaxed'>
                                    B.Sc. Information Technology graduate with hands-on
                                    experience building web applications using React, Next.js,
                                    Node.js, PostgreSQL and Supabase.
                                </p>

                            </div>


                            {/* Resume Buttons */}
                            <div className='flex flex-wrap gap-2 shrink-0'>

                                {/* View Resume */}
                                <a
                                    href='/Manish_Suriyal_Resume.pdf'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-sm font-medium transition-colors'
                                >
                                    <ExternalLink size={15} />
                                    View Resume
                                </a>

                                {/* Download Resume */}
                                <a
                                    href='/Manish_Suriyal_Resume.pdf'
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

                            <a
                                href='mailto:manishsuriyal21@gmail.com'
                                className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors'
                            >
                                <span>✉</span>
                                Email
                            </a>

                            <Link
                                href='https://github.com/manish012321'
                                target='_blank'
                                className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors'
                            >
                                <span>GH</span>
                                GitHub
                            </Link>

                            <Link
                                href='https://www.linkedin.com/in/manish-suriyal-dev/'
                                target='_blank'
                                className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors'
                            >
                                <span>in</span>
                                LinkedIn
                            </Link>

                        </div>

                        {/* Experience */}
                        <div className='mt-8'>

                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Experience
                            </h2>

                            <div className='mt-4 pl-4 border-l-2 border-zinc-200 dark:border-zinc-700'>

                                <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                    Software Engineer Intern
                                </h3>

                                <p className='text-sm text-blue-500 dark:text-blue-400 mt-1'>
                                    YugaYatra Retail (OPC) Private Limited
                                </p>

                                <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                                    Remote · Aug 2026 - Present
                                </p>

                                <p className='text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed'>
                                    Building production features across React, Next.js, Node.js,
                                    PostgreSQL and Supabase in a microservices-based environment
                                    for e-commerce and PropTech platforms.
                                </p>

                            </div>

                        </div>

                        {/* Education */}
                        <div className='mt-8'>

                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Education
                            </h2>

                            <div className='mt-4 pl-4 border-l-2 border-zinc-200 dark:border-zinc-700'>

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

                            </div>

                        </div>

                        {/* Skills */}
                        <div className='mt-8'>

                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Technical Skills
                            </h2>

                            <div className='flex flex-wrap gap-2 mt-4'>

                                {[
                                    'JavaScript',
                                    'React.js',
                                    'Next.js',
                                    'Tailwind CSS',
                                    'Node.js',
                                    'Express.js',
                                    'REST APIs',
                                    'JWT',
                                    'MongoDB',
                                    'PostgreSQL',
                                    'Supabase',
                                    'Git',
                                    'GitHub',
                                    'Postman',
                                    'Vercel',
                                    'Render'
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className='text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono'
                                    >
                                        {skill}
                                    </span>
                                ))}

                            </div>

                        </div>

                        {/* Projects */}
                        <div className='mt-8'>

                            <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                Projects
                            </h2>

                            <div className='mt-4 space-y-5'>

                                {/* Explain This Diff */}
                                <div>

                                    <div className='flex items-center justify-between gap-2'>

                                        <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                            Explain This Diff
                                        </h3>

                                        <Link
                                            href='https://github.com/manish012321'
                                            target='_blank'
                                            className='text-gray-500 hover:text-blue-400 transition-colors'
                                        >
                                            <ExternalLink size={14} />
                                        </Link>

                                    </div>

                                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed'>
                                        Chrome extension that summarizes GitHub pull-request diffs
                                        using Groq AI and Llama models with a secure Express proxy
                                        and SHA-256 response caching.
                                    </p>

                                </div>

                                {/* SOP Generator */}
                                <div>

                                    <div className='flex items-center justify-between gap-2'>

                                        <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                                            AI-Powered SOP Generator
                                        </h3>

                                        <Link
                                            href='https://github.com/manish012321/SOP-Generator'
                                            target='_blank'
                                            className='text-gray-500 hover:text-blue-400 transition-colors'
                                        >
                                            <ExternalLink size={14} />
                                        </Link>

                                    </div>

                                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed'>
                                        MERN application with JWT authentication, multi-tenant
                                        workspaces and Gemini AI-powered document generation.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Download Button Bottom */}
                        <div className='mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700'>

                            <a
                                href='/Manish_Suriyal_Resume.pdf'
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

