import React from 'react'
import { data } from '../utils/data';
import { SearchIcon} from "@heroicons/react/outline"
import { VideoCameraIcon ,DotsHorizontalIcon} from "@heroicons/react/solid";
import Contact from './Contact';
const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mt-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-4'/>
                <SearchIcon className='h-4'/>
                <DotsHorizontalIcon className='h-4'/>
            </div>
        </div>
        {data.map(contact=>(
            <Contact key={contact.id} src={contact.src} name={contact.name}/>
        ))}
    </div>
  )
}

export default Widgets