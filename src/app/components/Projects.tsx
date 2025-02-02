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
    <section id="projects" className="bg-gray-100 py-20">
    <div className="container mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">My Projects</h2> 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {query.map((project:IProject)=> (
                  <div key={project.name} className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
                    <Image src={project.imageUrl} alt={project.name} width={350} height={300}/>
                    
                     <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                     <Link href={project.url} className="text-blue-600 hover:text-blue-800">View Project</Link>

                    </div>
              ))}
             
            </div>
          </div>
        </section>
    </div>
  )
}

export default Projects