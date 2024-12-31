import { BASE_URL } from "../../util/constants";
import { Project } from "../../types/types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../reusable/Loader";

export default function AboutMe(){

  const [featuredProject, setFeaturedProject] = useState<Project>({
    id: '',
    title: '',
    description: '',
    image: '',
    snippet: '',
    github_link: '',
    site: ''
  })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => { 
    const fetchProject = async () => {
      setLoading(true)
      try {
        const res = await fetch('data/projects.json')
        const data = await res.json()
        const foundFeaturedProject = data.find((item: Project) => item.id == '35')
        if(foundFeaturedProject == undefined) return
        setFeaturedProject(foundFeaturedProject)
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
      {!loading ? 
      <div className="grid gap-12 lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <h1 className='mb-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl lg:text-6xl'>FullStack, Frontend-focused, TypeScript, React, NextJS and Ruby on Rails Software Engineer.</h1>
          <div className="w-full my-8">
            <a className="font-sans text-white rounded-btn p-3 bg-blue-500 button-main button-scheme" href='https://docs.google.com/document/d/1n3G-_CLKlqFDO1Vevl_ca9NOiHziL2W3kS9OhMOxpTE/edit?usp=sharing' download>Download Resume</a>
          </div>
          <p className='mb-6 font-normal text-gray-900'>
            Strategic, resourceful, results-driven technologist offering expertise in creating user-friendly and responsive frontend web applications, converting design mockups and user requirements into clean, effective code to improve user experience, optimizing web performance, executing best practices, and spearheading cross-browser compatibility. Innovative business partner, effective communicator, and problem-solving project manager known for cultivating and maintaining positive, productive relationships with designers, backend developers, and stakeholders to provide quality code and solutions that meet project goals and deadlines, championing projects to completion. Collaborative leader and team contributor with demonstrated success in partnering with diverse, cross-functional teams to stay current with the latest technologies and best practices in front-end development to drive innovation, maintain a competitive edge, and attain company goals.
          </p>
        </div>
        <div className="pointer">
          {featuredProject?.id && ( 
            <>
              <Link to={'/projects/' + featuredProject.id}>
              <h1 className='text-black mb-4 text-4xl font-semibold leading-none tracking-tight md:text-5xl lg:text-6xl'>Featured</h1>
              <div key={featuredProject.id} className="[&_pre]:whitespace-pre-wrap overflow-hidden max-h-full py-2 lg:p-0">
                  <h1 className="text-black hover:text-blue-500 mb-4 text-xl font-semibold leading-none tracking-tight md:text-2xl">{featuredProject.title}</h1>
                  <div className='text-gray-500'>
                    <img src={featuredProject.image}/>
                    <br/>
                  </div>
              </div>
              </Link>
              <div className="text-gray-900">Link to repository:  &nbsp; <a className="cursor-default hover:text-blue-600 text-blue-500 hover:underline" href={featuredProject.github_link}>{featuredProject.github_link}</a></div>
              <div className="text-gray-900 inline">Visit site: &nbsp;
                <a href={featuredProject.site} className=" cursor-default hover:underline inline hover:text-blue-600 text-blue-500">{featuredProject.site}</a>
              </div>
            </>
          )}
        </div> 
      </div> :
      <Loader/> }
    </div>
  );
}
