import {useState, useLayoutEffect, useRef, useEffect} from 'react'
import Tags from '../reusable/Tags'
import { filterByTags, initTags } from '../../util/helpers'
import { Algo, AlgoTag } from '../../types/types'
import AlgorithmCard from './AlgorithmCard'
import Loader from '../reusable/Loader'

export default function Algorithms(){
  
  const [initAlgorithms, setInitAlgorithms] = useState<Algo[]>([])
  const [filteredAlgorithms, setFilteredAlgorithms] = useState<Algo[]>([])
  const [height, setHeight] = useState<number>(0)
  const [toggleTags, setToggleTags] = useState<boolean>(false)
  const [tags, setTags] = useState<AlgoTag[]>([])
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : null)
  const [loading, setLoading] = useState<boolean>(true)

  const ref = useRef<HTMLDivElement>(null)

  const handleToggle  = () => {
    setToggleTags(() => !toggleTags)
  }

  const handleWindowSizeChange = () => {
    if(typeof window !== "undefined"){
      setWidth(window.innerWidth)
    }
  }

  const handleSelection = (tag: AlgoTag) => {
    const tagIndex = tags.findIndex((curTag) => curTag.name == tag.name)
    const deactivateTag = tags[tagIndex].active
    if(deactivateTag){
      const updatedTag = {...tags[tagIndex], active: false};
      const newTags = [
        ...tags.slice(0, tagIndex),
        updatedTag,
        ...tags.slice(tagIndex + 1)
      ]
      setTags(newTags)
    } else {
      const updatedTag = {...tags[tagIndex], active: true};
      const newTags = [
        ...tags.slice(0, tagIndex),
        updatedTag,
        ...tags.slice(tagIndex + 1)
      ]
      setTags(newTags)
    }
  }

  useEffect(() => { 
    const fetchAlgorithms = async () => {
      setLoading(true)
      try{
        const res = await fetch('data/algorithms.json')
        const data = await res.json()
        setInitAlgorithms(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAlgorithms()
  }, [])

  useEffect(() => {
    setTags(() => initTags(initAlgorithms))
    console.log(initAlgorithms)
  }, [initAlgorithms])

  useEffect(() => {
    const selected = tags.some((tag) => tag.active)
    if(selected){
      const newFilteredAlgorithms = filterByTags(filteredAlgorithms,tags)
      setFilteredAlgorithms(newFilteredAlgorithms)
    }else{
      setFilteredAlgorithms(initAlgorithms)
    }
  }, [tags])

  useEffect(() => {
    if(typeof window !== "undefined"){
      window.addEventListener('resize', handleWindowSizeChange)
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange)
      }
    }
}, [])

  useLayoutEffect(() => { 
    if(ref?.current && width){
      const newHeight = ref.current.clientHeight
      setHeight(newHeight)
    }
  }, [width, toggleTags])

  return (
    <div>
      <Tags 
        ref={ref}
        tags={tags} 
        toggleTags={toggleTags} 
        handleToggle={handleToggle}
        handleSelection={handleSelection}
        selected={tags.some((tag) => tag.active)}
      />
      <div className='h-5'></div>
      { !loading ?
      <AlgorithmCard 
        filteredAlgorithms={filteredAlgorithms}
        initAlgorithms={initAlgorithms}
        height={height}
      /> :
      <Loader/>}
    </div>
  )
}
