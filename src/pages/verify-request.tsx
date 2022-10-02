import Link from "next/link";
import { NextPage } from "next/types"
import React from "react"

const verifyRequest: NextPage = () => {
  
  return (
  <>
    <div className="bg-gradient-to-tr from-main to-secondary w-screen min-h-screen h-full absolute text-[white]/80 flex justify-center items-center" style={{ backgroundImage: 'url("bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full h-full flex flex-col lg:w-[50%] lg:h-[50%] backdrop-blur-2xl supports-backdrop-blur:bg-white/50 bg-secondary/80 lg:rounded-3xl items-center justify-center">
        <div className="text-xl mb-5 w-[70%] text-center">
          Check your email
        </div>
        <div className="text-2xl mb-10 w-[70%] text-center">
          A sign-in link has been sent to your email address.
        </div>
          <Link href="/">
            <button
              type="submit"
              className="inline-block px-7 py-3 border border-[white]/5 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-[70%]"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Go back to homepage
            </button>
          </Link>
        </div>
    </div>
  </>
)}

export default verifyRequest;