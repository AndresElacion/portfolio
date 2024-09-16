import { projects } from "../data/projects"

export default function Featured() {
    return (
        <div id="featured">
            <div className="mt-12 mb-8">
                <p className="uppercase">/ Featured projects</p>
                <hr />
            </div>
            
            <div className="grid lg:grid-cols-2 gap-4">
                {projects.slice(0, 2).map( (project, index) => {
                    return  (
                        <div key={index} className="flex lg:flex-row flex-col justify-between border-2 p-5 rounded-xl shadow-xl">
                            <div className="mr-4 lg:w-1/2">
                                <img src={project.image} alt="" className="h-full w-full shadow-xl rounded-xl border"/>
                            </div>
                            <div className="flex flex-col lg:w-1/2">
                                <h3 className="uppercase text-xl lg:text-3xl">{project.name}</h3>
                                <p className="flex-grow">{project.description}</p>
                                <button type="button" className="inline-block px-6 py-2.5 border-2 border-cyan-500 font-medium text-xs leading-tight uppercase rounded-xl hover:text-white hover:bg-cyan-500 focus:outline-none focus:ring-0">
                                    <a href={project.url} target="_blank" rel="noreferrer">
                                        Link
                                    </a>
                                </button>
                            </div>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
}