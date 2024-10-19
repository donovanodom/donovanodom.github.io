import { useEffect, useState } from 'react'
import { BASE_URL } from '../../util/constants'
import { useParams } from 'react-router'
import { Project } from '../../types/types'
import Loader from '../reusable/Loader'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { convertUnicode } from '../../util/helpers'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function ProjectDetails(){

  const { slug } = useParams()
  const [project, setProject] = useState<Project>({
    id: "",
    title: "",
    description: "",
    image: "",
    snippet: "",
    github_link: "",
    site: "",
  })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => { 
    const fetchProject = async () => {
      setLoading(true)
      try{
        const res = await fetch(BASE_URL + `/projects/${slug}`)
        const data = await res.json()
        setProject(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProject()
  }, []) 

  return (
    <div>
      { !loading ? 
        <div className="text-black [&_pre]:whitespace-pre-wrap">
          <div>
            <h1>
              <a href={project.github_link} className="mb-4 text-2xl font-semibold leading-none tracking-tight md:text-3xl lg:text-4xl hover:text-blue-500">{project.title}</a>
            </h1>
            <div className="mt-2">Visit site: &nbsp;
              <a href={project.site} className="cursor-default hover:underline inline hover:text-blue-600 text-blue-500">{project.site}</a>
            </div>
            <div>Link to repository: <a className="text-blue-500" href={project.github_link}>{project.github_link}</a></div>
            <div>
              <p>{project.description}</p>
              <br/>
              <img src={project.image}/>
              <br/> 
              <div>Code snippet:</div>
              <SyntaxHighlighter language="javascript" style={nightOwl}>
                {convertUnicode(project.snippet)}
              </SyntaxHighlighter>
            </div>
          </div> 
        </div> :
      <Loader/> }
    </div>
  )
}
