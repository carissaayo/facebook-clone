const SidebarRow = ({Icon,title,src}) => {
  return (
    <div className='cursor-pointer flex items-center space-x-2 p-1 xs:p-2 sm:p-4 hover:bg-gray-200 rounded-xl '> 
      {src && <img
    className="rounded-full"
    alt="user"
    src={src}
    width={30}
    height={30}
    layout="fixed"
    />}
    {Icon && <Icon className="h-8 w-8 text-blue-500"/>}
    <p
    className='hidden sm:inline-flex font-medium '
    >
        {title}</p>
    </div>
  )
}

export default SidebarRow