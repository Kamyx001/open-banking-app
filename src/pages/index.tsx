import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import { useSession, signOut } from 'next-auth/react';
import Navbar from "../components/Navbar/Navbar";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>

      <div className="bg-gradient-to-tr from-main to-secondary h-screen p-4">
      <button className="m-[100px]" onClick={() => signOut()}>sign out</button>
      </div>
    </>
  );
};

export default Home;