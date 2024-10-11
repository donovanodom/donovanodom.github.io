import React, { useState, useEffect } from 'react'
import { parseDate, searchWriteUpText } from '../../util/helpers'
import SearchInput from '../../components/reusable/SearchInput'
import Tag from '../../components/reusable/Tag'
import { WriteUp } from '../../types/types'
import { Link } from 'react-router-dom'

export default function WriteUps(){

  const [search, setSearch] = useState('')
  const [writeUps, setWriteUps] = useState<WriteUp[]>([])

  useEffect(() => {
    const fetchWriteUps = async () => {
      const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@donovanodom')
      const data = await res.json()
      setWriteUps(searchWriteUpText(search, data.items))
    }
    fetchWriteUps()
  },[search])

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    setSearch((event.target as HTMLInputElement).value)
  }

  return (
    <div className="md:px-12 md:py-4 px-4 py-4 md:mt-14 mt-20">
      <SearchInput handler={searchHandler} placeholder={'Search for text...'}/>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1'>
      {!!writeUps.length && writeUps?.map((writeUp: WriteUp, index: number) => (
          <div key={writeUp?.guid || index} className='overflow-hidden max-h-[600px] md:max-h-[400px] p-2 lg:p-0'>
            <Link to={writeUp.link}>
              <h1 className='text-black hover:text-blue-500 mb-4 text-xl font-extrabold leading-none tracking-tight md:text-2xl'>{writeUp.title}</h1>
            </Link>
            <div className='mb-4'>
              {writeUp?.categories?.map((tag: string, index: number) => 
                <Tag key={index} tag={tag}/>
              )}
            </div>
            <div className='float-right font-light text-sm cursor-default'>
              <div className='text-black text-right'>
                {writeUp.author}
              </div>
              <div className='text-black text-right'>
                {parseDate(writeUp.pubDate)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
