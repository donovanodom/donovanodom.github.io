import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Algo } from '../../types/types';
import Loader from '../reusable/Loader';
import { convertUnicode } from '../../util/helpers';

export default function AlgorithmDetails(){

  const { slug } = useParams()
  const [algorithm, setAlgorithm] = useState<Algo>({
    id: "",
    title: "",
    content: "",
    code: "",
    tags: []
  })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => { 
    const fetchAlgorithm = async () => {
      setLoading(true)
      console.log(slug, typeof slug)
      try{
        const res = await fetch('data/algorithms.json')
        const data = await res.json()
        const foundAlgorithm = data.find((item: Algo) => item.id == slug)
        if(foundAlgorithm == undefined) return
        setAlgorithm(foundAlgorithm)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAlgorithm()
  }, []) 

  return (
    <div>
      { !loading ? 
      <div className="text-black [&_pre]:whitespace-pre-wrap">
        <h1 className="mb-4 text-2xl font-semibold leading-none tracking-tight md:text-3xl lg:text-4xl">{algorithm.title}</h1>
        <div dangerouslySetInnerHTML={{__html: algorithm.content}}/>
        <br/>
        <span className='font-semibold text-lg'>Solution:</span>
        <SyntaxHighlighter language="javascript" style={nightOwl}>
          {convertUnicode(algorithm.code)}
        </SyntaxHighlighter>
      </div> :
      <Loader/> }
    </div>
  )
}
