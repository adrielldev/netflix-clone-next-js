import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import netflixLogo from '../public/netflix-logo.png'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center"
    style={{backgroundImage:'linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(https://assets.nflxext.com/ffe/siteui/vlv3/7cee2527-d2cc-4cc9-99f6-d1375e72d46e/464f74e4-ad4d-4357-9c7e-96312b13196b/BR-pt-20230103-popsignuptwoweeks-perspective_alpha_website_medium.jpg)'}}>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className='w-full'>
        <div className="px-16 py-8 flex justify-between items-center">
          <h1 className="text-white text-3xl">
            <img src={netflixLogo.src} className='w-28 h-16'/>
          </h1>
          {!session && <>
        <button className='bg-[#e50914] p-4 text-sm w-20 h-12 flex items-center  text-white border border-transparent rounded ' onClick={()=>signIn()}>Sign In  </button>
       </>}

        </div>
      </header>


      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
       
       {session && <>
       Signed in as{session.user?.email} <br/>
       <button onClick={()=>signOut()}>Sign Out</button>
       </>}
       
        <h1 className="sm:text-5xl text-3xl font-bold text-white max-w-lg">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className='sm:text-2xl texl-xl text-white mt-4 mb-8 '>
      Watch anywhere. Cancel anytime.
        </h2>
        <p className='text-white sm:text-xl text-sm'>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        <div className="flex mt-4">
        <input placeholder='Email address' className='bg-white p-4 max-w-[300px] ' />
        <button className='bg-[#e50914] text-white  sm:text-xl px-8 flex justify-center items-center'>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

        </button>

        </div>
        
      </main>

    </div>
  )
}

export default Home
