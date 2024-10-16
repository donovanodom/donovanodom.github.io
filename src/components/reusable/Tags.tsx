import {ForwardRefRenderFunction, forwardRef} from 'react'
import { AlgoTag } from '../../types/types'
import Tag from './Tag'

interface TagsProps{
  tags :AlgoTag[],
  toggleTags: boolean,
  handleToggle: () => void,
  handleSelection: (tag: AlgoTag) => void,
  selected: boolean,
}

const Tags: ForwardRefRenderFunction <HTMLDivElement,  TagsProps> = ({tags, toggleTags, handleToggle, handleSelection, selected}, ref) => {
  return (
    <div className={`fixed ${toggleTags ? 'z-[3] border-t border-black md:top-[88px]' : 'z-[5] md:top-[72px]'} top-16 w-full ml-[-16px] md:ml-[-112px] mb-4`}>
      <div ref={ref} className={`${toggleTags ? 'p-3' : 'p-0'} max-h-48 overflow-y-scroll bg-white  ${toggleTags ? 'border-b border-b-black' : ''}`}>
        {toggleTags && !!tags.length && tags?.map((tag: AlgoTag, index: number) => {
          const displayTag = `${tag.name} (${tag.count})`
          return <Tag key={index} tag={displayTag} tagObj={tag} handleSelection={handleSelection} selected={selected}/>
        })}
      </div>
      <div className={ `w-24 pb-1 text-black rounded-b-xl border-b border-l border-r border-black bg-white cursor-pointer text-[15px] font-normal text-center relative ${toggleTags ? 'top-0 md:top-0' : 'top-2 md:top-4'} ml-6 md:ml-28`} onClick={handleToggle}>
        <div className='bg-white h-[1px] w-[94px] relative top-[-1px]'></div>
        Tags
      </div>
    </div>
  )
}

const ForwardedTagsDiv = forwardRef(Tags)

export default ForwardedTagsDiv