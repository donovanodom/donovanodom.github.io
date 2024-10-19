import { useNavigate } from 'react-router';
import { Project } from '../../types/types';
import { BASE_URL } from '../../util/constants';
import { useEffect, useState } from 'react';
import Loader from '../reusable/Loader';

export default function Projects(){

  const [initProjects, setInitProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const navigate = useNavigate()

  useEffect(() => { 
    const fetchProjects = async () => {
      setLoading(true)
      try{
        const res = await fetch(BASE_URL + '/projects')
        const data = await res.json()
        setInitProjects(data)
      } catch (error){
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <div>
      {!loading ? 
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1">
        {!!initProjects && initProjects?.map((project: Project) => (
            <div key={project.id} onClick={() => navigate(`/projects/${project.id}`)} className="pointer [&_pre]:whitespace-pre-wrap overflow-hidden p-2 lg:p-0">
                <h1 className="text-black hover:text-blue-500 mb-4 text-xl font-semibold leading-none tracking-tight md:text-2xl">{project.title}</h1>
              <div className='text-gray-900'>
                <img src={project.image}/>
              </div>
            </div>
        ))}
      </div> :
      <Loader/> }
    </div>
  )
}

