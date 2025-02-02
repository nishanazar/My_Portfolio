import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold">
          Nisha Nazar
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li><Link href="#about" className="hover:text-blue-300">About</Link></li>
            <li><Link href="#projects" className="hover:text-blue-300">Projects</Link></li>
            <li><Link href="#contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  
  )
}

export default Navbar