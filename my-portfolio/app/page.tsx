

import Image from 'next/image';
import Link from 'next/link';
import HomeBackgroundParticles from '@/components/HomeBackgroundParticles';
import Navbar from '@/components/Navbar';



export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex " >
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Jacob&apos;s minimal portfolio site
        </p>
      </div>
      <HomeBackgroundParticles />
      

      <div className="relative z-11 flex place-items-center  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:z-5 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-600 after:via-red-500 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-pink-900 after:dark:via-[#ff1a01] after:dark:opacity-40 before:lg:h-[360px] z-5">
        <Image
          className="relative z-10 drop-shadow-[0_0_0.35rem_#ff0303] "
          src="/jjj.png"
          alt="JJ Logo"
          width={400}
          height={350}
         
        />
      </div>
      

      <div className=" z-10 mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link
          href="/drone"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Oceanic Sampling Drone{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out my senior capstone project at Texas A&M University - Corpus Christi.
          </p>
        </Link>
        <Link
          href="/resume"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resume{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Check out my resume and please feel free to reach out by phone or email.
          </p>
        </Link>
        <Link
          href="/projects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Visit the Jones Archives to see a compilation of my best works.
          </p>
        </Link>

        <Link
          href="/newprojects"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Github Repos{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Click here to see all of my public repositories going all the way back to Sophomore year of highschool!
          </p>
        </Link>

        
       

        
      </div>
    </main>
  )
}
