'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-[#0F172A] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-400">
          Nisha Nazar
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white hover:text-blue-300 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation */}
        <nav className={`${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#0F172A] md:static md:block md:w-auto p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center font-medium">
            <li><Link href="#about" onClick={() => setIsOpen(false)} className="hover:text-blue-300 transition-colors">About</Link></li>
            <li><Link href="#skill" onClick={() => setIsOpen(false)} className="hover:text-blue-300 transition-colors">Skills</Link></li>
            <li><Link href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-300 transition-colors">Projects</Link></li>
            
            <li><Link href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-300 transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar