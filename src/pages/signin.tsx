import type { NextPage } from 'next'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { signIn, getProviders, getSession, getCsrfToken, useSession } from 'next-auth/react'
import Image from 'next/image'

const signin: NextPage = ({providers, csrfToken}: any) => {

  const [email, setEmail] = useState('')

  const sendLoginVerification = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(email)

    signIn('email', { redirectUrl: "/protected", email })
  }
  
  return (
  <>
    <div className="bg-gradient-to-tr from-main to-secondary w-screen min-h-screen h-fit absolute text-[white]/60 flex justify-center items-center" style={{ backgroundImage: 'url("bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div
        className="fixed rounded-3xl lg:max-w-[1000px] w-full lg:max-h-[700px] h-screen flex flex-col lg:flex-row"
      >
        <div className="flex lg:w-[50%] h-full backdrop-blur-2xl supports-backdrop-blur:bg-white/50 bg-secondary/80 lg:rounded-3xl lg:mr-2">
          <div className="flex flex-col justify-center items-center w-full lg:m-[40px] dark: md:scale-100 lg:scale-[1.2] scale-[.8] sm:scale-100">
            <div>
              <form method="post" onSubmit={sendLoginVerification}>
                <div className="mb-6">
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value) }
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-[black] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email address" />
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 border border-[white]/5 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>
              </form>

              <div
                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
              >
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <button
                className="px-7 py-3 font-medium border border-[white]/5 text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 max-w-full"
                onClick={() => signIn('google')}
                key="Google"
              >
                <div className="mr-2 flex items-center">
                  <Image
                    alt="google"
                    src="/google.svg"
                    height="14"
                    width="14" />
                </div>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:w-[50%] h-fit lg:h-full bg-[white] text-accent lg:rounded-3xl lg:ml-2  backdrop-blur-2xl supports-backdrop-blur:bg-white/50">
          <div className="flex flex-col justify-center scale-[.8] lg:scale-100 items-center w-full lg:m-[40px] rounded-r-xl">
            <img
              src="presentation.svg"
              className="h-[50%] mt-[10%] hidden lg:flex" />
            <div className="h-[40%]">
              <h1 className="text-center text-3xl font-semibold text-text">
                Lorem ipsum <span className="text-accent">dolor sit</span> amet
              </h1>
              <p className="text-justify text-xl font-normal text-text m-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)}


export async function getServerSideProps(context: any) {

  const session = await getSession(context);

  if (session) {
    return {
      redirect: { 
        permanent: false,
        destination: "/" 
      },
      props: {
        session
      }
    };
  }

  return {
    props: {},
  };
}

export default signin