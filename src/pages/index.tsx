import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useSession, signIn, signOut } from 'next-auth/react';
import { Header } from "../components/Header/Header";
import Link from "next/link";
import { Session } from "next-auth";
import Button from "@mui/material/Button";
import Iphone from "../components/Iphone/Iphone";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        {/* <Header username={""} onLogin={signIn} onLogout={signOut}></Header> */}
        {session != null ? (
          <LoggedIn session={session} expires={""} />
        ) : (
          <Link href="/login">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign in
            </button>
          </Link>
        )}
      </main>
    </>
  );
};

const LoggedIn = (session: Session) => {
  return (
    <>
      <h1>Hello {session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <Button onClick={() => signOut()}>123</Button>
    </>
  )
}


export default Home;
