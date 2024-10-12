import { useNavigate } from 'react-router';
import { Project } from '../../types/types';
import { BASE_URL } from '../../util/constants';
import { useEffect, useState } from 'react';

export default function Projects(){

  const [initProjects, setInitProjects] = useState<Project[]>([])

  const navigate = useNavigate()

  useEffect(() => { 
    const fetchProjects = async () => {
      const res = await fetch(BASE_URL + '/projects')
      const data = await res.json()
      setInitProjects(data)
    }
    fetchProjects()
  }, [])

  return (
    <div className="md:px-12 md:py-4 px-4 py-4 md:mt-14 mt-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
        {!!initProjects && initProjects?.map((project: Project) => (
            <div key={project.id} onClick={() => navigate(`/projects/${project.id}`)} className="pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
                <h1 className="text-black hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl">{project.title}</h1>
              <div className='text-gray-900'>
                <img src={project.image}/>
                <br/>
                <p>{project.description}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

