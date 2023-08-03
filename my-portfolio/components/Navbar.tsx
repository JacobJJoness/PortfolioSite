
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      {/* Link with Image (Top Left) */}
      <div className="flex items-center">
        <Link href="/">
            <Image
                className="h-8 w-8"
                src="/jjj.png"
                alt="JJ Logo"
                width={80}
                height={80}
                priority
            />
        </Link>
        {/* Add additional text or elements here if needed */}
      </div>

      {/* Links (Right Hand Side) */}
      <div className="flex items-center space-x-16 pr-8">
        {/* First Github Link */}
        <Link className="text-white font-mono" href="https://www.linkedin.com/in/jacob-jones-b5bb8220b/">
          LinkedIn
        </Link>

      
        <Link className="text-white font-mono" href="https://github.com/JacobJJoness">
          Github
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
