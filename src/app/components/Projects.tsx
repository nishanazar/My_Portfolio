import Image from "next/image"
import { client } from "@/sanity/lib/client"
import Link from "next/link"
interface IProject {
  name: string,
  description: string,
  imageUrl: string,
  url: string,
}
const Projects = async () => {
  const query:IProject[] = await client.fetch(`*[_type == "projects"][0..9]{
  name,
  description,
  "imageUrl": image.asset->url,
  url
    
}`
)
return (
    <div>
    {/* Projects Section */}
    <section id="projects" className="bg-[#0F172A]  py-20">
  <div className="container mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl font-semibold text-white mb-8 animate-fade-in">
  My Projects
</h2>
    
    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform animate-zoom-in">
      {query.map((project: IProject) => (
        <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 transform animate-zoom-in">
          {/* Project Image */}
          <Image src={project.imageUrl} alt={project.name} width={350} height={300} className="rounded-md mb-4" />
          
          {/* Project Description */}
          <p className="text-lg text-gray-700 mb-4">{project.description}</p>

          {/* Project Link */}
          <Link href={project.url} className="text-[#0F172A] hover:text-blue-800 transition duration-300">
            View Project
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  )
}

export default Projects