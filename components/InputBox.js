import { useRef,useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db, storage } from "../firebase";
import { ref, getDownloadURL, uploadString } from "@firebase/storage";

import {
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";
const InputBox = ({ user }) => {
    const [imageToPost, setImageToPost] = useState(null)
    const inputRef = useRef(null);
    const imageRef = useRef(null);
    const sendPost = async (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;
        const { value } = inputRef.current;
        const { name, email, image } = user;
        const docRef = await addDoc(collection(db, "posts"), {
            message: value,
            name,
            email,
            image,
            timestamp: serverTimestamp(),
            
        });
        console.log("new post added", docRef.id);
        const imageFBRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageFBRef, imageToPost, "data_url").then(
          async (snapshot) => {
            const downloadURL = await getDownloadURL(imageFBRef);

            await updateDoc(doc(db, "posts", docRef.id), {
              postImage: downloadURL,
            });
          }
        );
        setImageToPost(null)
        
        inputRef.current.value = "";
        
    };
    const addImageToPost=(e)=>{
            const reader = new FileReader();
            if(e.target.files[0]){
                reader.readAsDataURL(e.target.files[0])
            }
            reader.onload = readerEvent=>setImageToPost(readerEvent.target.result)

    }
    const removeImage=()=>{
        setImageToPost(null)
    }
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <img
          className="rounded-full"
          src={user.image}
          alt="user"
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            type="text"
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            placeholder={`What's on your mind, ${user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
            <div className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
            onClick={removeImage}>
                <img src={imageToPost} alt="post"
                className="object-contain h-10"
                />
                <p className="text-xs text-red-500 text-center">Remove</p>
            </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-1">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base"> Live Video</p>
        </div>
        <div 
        onClick={()=>imageRef.current.click()}
        className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base"> Post/Video</p>
          <input type="file" hidden onChange={addImageToPost} ref={imageRef}/>
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
