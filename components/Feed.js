import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"


const Feed = ({user, posts}) => {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:40 overflow-y-auto scrollbar-hide ">
        <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
            <Stories/> 
            <InputBox user={user&&user}/>
        <Posts posts={posts}/>
        </div>
    </div>
  )
}

export default Feed