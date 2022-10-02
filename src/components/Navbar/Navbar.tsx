import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {

  return (<div className="top-0 w-full backdrop-blur flex-none duration-500 z-50 border-b border-accent/50 bg-white/95 supports-backdrop-blur:bg-white/60 fixed text-accent">
    <div className="max-w-8xl mx-auto">
      <div className="border-b border-accent/10 lg:px-8 lg:border-0 dark:border-accent/10 mx-4 lg:mx-0">
        <div className="relative flex items-center">
          <div className="relative flex flex-row">
            <div className="m-4">
              <Link href="/"
                className="text-s leading-5 font-semibold bg-slate-400/10 rounded-full  flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5"
              >
                <Image src="/favicon.ico" alt="logo" height="20" width="20" />
              </Link>
            </div>
            <Dashboard />
          </div>
          <div className="relative flex items-center ml-auto">
            <User />
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export const User = () => {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (<>
      {session.user!.name}
    </>)
  }

  return <Link href="/signin">Sign in</Link>
}

export const Dashboard = () => {
  const { data: session, status } = useSession()

  if(typeof window === undefined) return <></>

  const location = useRouter().pathname;
  console.log(location)

  if (status === "authenticated") {
    if ( location != "user/dashboard" ) {
      return (
        <div className="ml-6 flex items-center px-3">
          <Link href="user/dashboard"
            
          >
            Dashboard
          </Link>
        </div>)
    } else { 
      return (
        <div className="ml-6 flex items-center bg-accent text-main px-3">
          <Link href="user/dashboard"
            
          >
            Dashboard
          </Link>
        </div>)
    } 
  }

  return <></>
}

export default Navbar;
