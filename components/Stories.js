import React from 'react'
import { data } from '../utils/data'
import StoryCard from './StoryCard'

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'
    >
        {data.map(item=>(
            <StoryCard key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Stories