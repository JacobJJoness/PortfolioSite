
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between p-4 mb-20 bg-gray-200/50 dark:bg-zinc-800/30">
      {/* Link with Image (Top Left) */}
      <div className="flex items-center">
        <Link href="/">
            <Image
                className="h-12 w-12 drop-shadow-[0_0_.2rem_#ff0303]"
                src="/jjj.png"
                alt="JJ Logo"
                width={120}
                height={120}
                priority
            />
        </Link>
        {/* Add additional text or elements here if needed */}
      </div>

      {/* Links (Right Hand Side) */}
      <div className="flex items-center space-x-16 pr-8">
        {/* First Github Link */}
        <Link className=" text-xl font-mono" href="https://www.linkedin.com/in/jacob-jones-b5bb8220b/">
          LinkedIn
        </Link>

      
        <Link className="text-xl font-mono" href="https://github.com/JacobJJoness">
          Github
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
