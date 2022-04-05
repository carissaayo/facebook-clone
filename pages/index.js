import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { getProviders, getSession, useSession} from 'next-auth/react'
import Head from 'next/head'
import { useEffect,useState } from 'react';
import Feed from '../components/Feed';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';
import Login from './api/auth/signin'

export default function Home({providers}) {
  const [posts, setPosts] = useState([])

  const { data: session, status } = useSession();
  const getData= async()=>{
      const postQuery = query(collection(db,"posts"));
    const postSnap = await getDocs(postQuery)
    // const getData= JSON.stringify(query)
    const usePost=postSnap.docs.map(doc=>doc.data())
    return setPosts(usePost)

  }
  useEffect(()=>{
      getData()
  },[db])
const user = session?.user;
// const data= JSON.parse(getData)
console.log(getData);

  if (!session) return <Login providers={providers} />;
 
  return (
    <div>
      <Head>
        <title>Facebook 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user && user} />
      <main className="flex">
        <Sidebar user={user && user} />
        <Feed user={user && user} posts={posts && posts} />
        <Widgets />
      </main>
    </div>
  );
}


export async function getServerSideProps(context) {
  const providers = await getProviders();
  

  return {
    props: {
      // session,
      providers,
    
    }, // will be passed to the page component as props
  };
}