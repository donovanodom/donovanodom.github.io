import { AlgoTag } from '../../types/types'

interface TagProps{
  tag: string,
  tagObj?: AlgoTag,
  handleSelection?: (tag: AlgoTag) => void,
  selected?: boolean,
}
const Tag = ({tag, tagObj, handleSelection, selected}: TagProps) => {

  return (
    <>
      { handleSelection && tagObj ?
      <div onClick={() => handleSelection(tagObj)} className={`font-mono text-black text-[12px] m-1 inline-block w-min h-min ${selected && tagObj.active ? 'bg-[#32de84]' : 'bg-gray-200'} cursor-default whitespace-nowrap me-2 px-3 py-[2px] select-none rounded-full`}>{tag}</div> :
      <div className="font-mono text-black text-[12px] m-1 inline-block w-min h-min bg-gray-200 cursor-default whitespace-nowrap me-2 px-3 py-[2px] select-none rounded-full">{tag}</div>
      }
    </>
  )
}

export default Tag