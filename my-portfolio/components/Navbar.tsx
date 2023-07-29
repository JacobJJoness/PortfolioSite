import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    
    <div className="flex items-center w-screen ">
        <Link href="/" className="text-white text-lg font-mono m-4  group rounded-lg border border-transparent px-3 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "> {/* Use Link to navigate back to the home page (you can adjust the href accordingly) */}
            <Image
            className="relative dark:drop-shadow-[0_0_0.35rem_#ff0303] "
            src="/jjj.png"
            alt="JJ Logo"
            width={80}
            height={80}
            priority
            />
        </Link>
        <div className="justify-end flex-row">
            <Link href="/" className="text-white text-lg font-mono m-4 group rounded-lg border border-transparent px-3 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "> {/* Use Link to navigate back to the home page (you can adjust the href accordingly) */}
                Github
            </Link>
            <Link href="/" className="text-white text-lg font-mono m-4 group rounded-lg border border-transparent px-3 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "> {/* Use Link to navigate back to the home page (you can adjust the href accordingly) */}
                Github
            </Link>
        </div>
        


    </div>
  )
}

export default Navbar;