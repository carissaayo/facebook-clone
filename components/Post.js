import Image from 'next/image'
import React from 'react';
import {ChatAltIcon,ShareIcon,ThumbUpIcon} from "@heroicons/react/outline"

const Post = ({name,message,postImage,image,timestamp}) => {
  return (
    <div className="flex flex-col pl-4">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadown-sm">
        <div className="flex items-center space-x-2">
          <img
            src={image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            {
              timestamp?(<p className="text-xs text-gray-400">
              {
              new Date(timestamp?.toDate()).toLocaleDateString()}
            </p>):(
              <p className="text-xs text-gray-400">Loading....</p>
            )
            }
            
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="pl-4 relative h-80 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" alt="post" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUpIcon className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className='inputIcon rounded-none '>
          <ChatAltIcon className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
            <ShareIcon className="h-4"/>
            <p className='text-sm sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post