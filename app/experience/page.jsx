import React from 'react'
import Left from '../components/Left'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const Experience = [
  {
    name: "Software Engineer Intern",
    company: "YugaYatra Retail (OPC) Private Limited",
    desc: "Building production features across React, Next.js, Node.js, PostgreSQL and Supabase in a microservices-based environment for e-commerce and PropTech platforms.",
    duration: "Aug 2026 - Present",
    location: "Remote",
    type: "Internship",
    tags: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Supabase"
    ],
    href: "https://www.manishsuriyal.dev/",
  },
]

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
                Experience
              </span>
              <span className='text-gray-400'>.md</span>
            </p>

          </div>

          {/* Experience List */}
          <div className='divide-y divide-zinc-200 dark:divide-zinc-700'>

            {Experience.map((experience) => (
              <div
                key={experience.name}
                className='p-5 md:p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors'
              >

                <div className='flex items-start gap-4'>

                  {/* Icon */}
                  <div className='w-12 h-12 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 shrink-0 flex items-center justify-center'>
                    <Briefcase
                      size={22}
                      className='text-blue-500 dark:text-blue-400'
                    />
                  </div>

                  {/* Info */}
                  <div className='flex-1 min-w-0'>

                    {/* Title */}
                    <div className='flex items-center gap-2 flex-wrap'>

                      <h2 className='text-base font-semibold text-blue-500 dark:text-blue-400'>
                        {experience.name}
                      </h2>

                      <span className='text-xs px-2 py-0.5 rounded-full border border-green-300 dark:border-green-700 text-green-600 dark:text-green-400 font-medium'>
                        {experience.type}
                      </span>

                    </div>

                    {/* Company */}
                    <p className='text-sm font-medium text-gray-700 dark:text-gray-300 mt-1'>
                      {experience.company}
                    </p>

                    {/* Description */}
                    <p className='text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed'>
                      {experience.desc}
                    </p>

                    {/* Duration & Location */}
                    <div className='flex items-center gap-4 mt-3 flex-wrap'>

                      <span className='flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400'>
                        <Calendar size={13} />
                        {experience.duration}
                      </span>

                      <span className='flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400'>
                        <MapPin size={13} />
                        {experience.location}
                      </span>

                    </div>

                    {/* Tags & Link */}
                    <div className='flex items-center justify-between mt-4 flex-wrap gap-3'>

                      {/* Tags */}
                      <div className='flex flex-wrap gap-1.5'>

                        {experience.tags.map(tag => (
                          <span
                            key={tag}
                            className='text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono'
                          >
                            {tag}
                          </span>
                        ))}

                      </div>

                      {/* Link */}
                      <Link
                        href={experience.href}
                        target='_blank'
                        className='flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-400 transition-colors'
                      >
                        <ExternalLink size={12} />
                        Portfolio
                      </Link>

                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default page
