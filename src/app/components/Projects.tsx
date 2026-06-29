import Image from "next/image"
import Link from "next/link"

interface IProject {
  name: string
  description: string
  imageUrl: string
  url: string
  githubUrl?: string
}

const projectsData: IProject[] = [
  { name: 'saas dashboard', description: 'Built a modern SaaS dashboard using Next.js and Tailwind CSS.', imageUrl: '/saas.png', url: 'https://saas-next-js-dashboard-git-main-nisha-nazars-projects.vercel.app', githubUrl: 'https://github.com/nishanazar/Saas_Next.js_Dashboard' },
   { name: 'humanoid website', description: 'Built an AI humanoid website using Next.js with responsive modern design.', imageUrl: '/book.png', url: 'https://hackathon-1-physical-ai-humano-git-1d7d85-nisha-nazars-projects.vercel.app/', githubUrl: 'https://github.com/nishanazar/Hackathon_1-Physical-AI-Humanoid-Robotics' },
   { name: 'Finance Advisor', description: 'Built an expense tracker application using Next.js with financial management features.', imageUrl: '/finance.png', url: 'https://build-an-expense-tracker-financial.vercel.app/', githubUrl: 'https://github.com/nishanazar/Build-an-Expense-Tracker-Financial-Advisor-App-' },
   { name: 'todo-app', description: 'Built a full-stack Todo dashboard using Next.js and modern web technologies.', imageUrl: '/todo_app.png', url: 'https://hackathon-ii-phase-2-todo-full-stac-rho.vercel.app/dashboard', githubUrl: 'https://github.com/nishanazar/Hackathon-II-Phase-2-Todo-Full-Stack-Web-Application' },
  
  { name: 'shop.io', description: 'I created a E-Commerce website using Next.js and Tailwind CSS.', imageUrl: '/E-commerece.png', url: 'https://marketplace-builder-hackathon-2025-515a.vercel.app', githubUrl: 'https://github.com/nishanazar/Marketplace_Builder_Hackathon_2025' },
  { name: 'Headphones website', description: 'I created a Headphones website using Next.js and Tailwind CSS.', imageUrl: '/headphones.png', url: 'https://milestone-3-blog-website-b1l5.vercel.app', githubUrl: 'https://github.com/nishanazar/Milestone_3_blog_website' },
  { name: 'Taween website', description: 'I created a responsive-website using Next.js and Tailwind CSS.', imageUrl: '/taween.png', url: 'https://tween-agency-responsive-website.vercel.app', githubUrl: 'https://github.com/nishanazar/Tween-Agency-responsive-website' },
   { name: 'figma-template', description: 'I created a figma-template using Next.js and Tailwind CSS.', imageUrl: '/figma_des.png', url: 'https://e-commerce-website-temperate.vercel.app', githubUrl: 'https://github.com/nishanazar/E-Commerce-Website-Temperate' },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0F172A] py-16 md:py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 animate-fade-in">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project: IProject) => (
            <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image 
                    src={project.imageUrl} 
                    alt={project.name} 
                    fill 
                    className="object-cover" 
                />
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-6 flex-grow">{project.description}</p>
              <div className="flex gap-4 justify-center mt-auto pt-4">
                <Link 
                    href={project.url} 
                    target="_blank" 
                    className="px-4 py-2 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 text-sm"
                >
                  View Live
                </Link>
                {project.githubUrl && (
                    <Link 
                        href={project.githubUrl} 
                        target="_blank" 
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition duration-300 text-sm"
                    >
                        GitHub Code
                    </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects