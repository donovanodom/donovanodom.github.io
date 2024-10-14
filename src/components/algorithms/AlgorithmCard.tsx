import { useNavigate } from "react-router";
import { Algo } from "../../types/types";
import DOMPurify from "isomorphic-dompurify"


interface AlgorithmCardProps {
  height: number,
  filteredAlgorithms: Algo[],
  initAlgorithms: Algo[],
}

export default function AlgorithmCard({height, filteredAlgorithms, initAlgorithms}: AlgorithmCardProps){

  return (
    <div style={{marginTop: `${height}px` }} className={`cursor-default grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:pt-2 xl:grid-cols-4 grid-cols-1`}>
      {!!filteredAlgorithms.length ? 
      filteredAlgorithms?.map((algorithm: Algo, index: number) => (
        <AlgorithmCardDetails algorithm={algorithm} index={index}/>
      )) :
      initAlgorithms?.map((algorithm: Algo, index: number) => (
        <AlgorithmCardDetails algorithm={algorithm} index={index}/>
      ))
      }
    </div>
  )
}

interface AlgorithmCardDetailsProps {
  index: number,
  algorithm: Algo,
}

function AlgorithmCardDetails({algorithm, index}: AlgorithmCardDetailsProps){

  const navigate = useNavigate()

  return (
    <div key={index} onClick={() => navigate(`/algorithms/${algorithm.id}`)} className="text-black pointer [&_pre]:whitespace-pre-wrap overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0 [mask-image:linear-gradient(0deg,transparent_0%,#000_40%,#000_80%)]">
      <h1 className="hover:text-blue-500 mb-4 text-xl font-semibold leading-none tracking-tight md:text-2xl">{algorithm.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(algorithm.content) }} className='text-gray-900'/>
    </div> 
  )
}
