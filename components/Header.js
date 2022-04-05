import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import {signOut} from "next-auth/react"

const Header = ({user}) => {
  
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image width={40} height={40} layout="fixed" src="/facebook.png" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className=" h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} active />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center  sm:space-x-2 justify-end">
        
          <img
            src={user.image}
            alt="user"
            width={40}
            height={40}
            layout="fixed"
            onClick={signOut}
            className="rounded-full cursor-pointer"
          />
       
        <p className="font-semibold whitespace-nowrap pr-3">{user.username}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
