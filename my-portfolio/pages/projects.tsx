
import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import HomeBackgroundParticles from '@/components/HomeBackgroundParticles';
import FramerBackground from '@/components/FramerBackground';

// Replace this with your actual project data
import projects from '../data/projects';

const ProjectsPage = () => {
  return (
    <div className=" relative min-h-screen py-1 px-1 ">
      <FramerBackground />
      <HomeBackgroundParticles />
      <Navbar/>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-mono mb-8">The Jones Archives</h1>
        
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700/30  rounded-lg p-4 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30 ">
              {project.videoUrl ? (
                <video
                  className="w-full rounded-lg h-64"
                  controls
                  autoPlay={false}
                  loop
                  muted
                  playsInline
                  src={project.videoUrl}
                />
              ) : (
                <Image className="w-full rounded-lg font-mono h-64 " width="400" height="300" src={project.gifUrl} alt={`Project ${index + 1}`} />
              )}
              <h2 className="text-xl font-mono mt-4">{project.title}</h2>
              <div className="mt-4 font-mono">
                <p>{project.description}</p>
                {project.gitLink ? (
                  <Link href = {project.gitLink} className ="text-blue-500 underline" >{project.linkText}</Link>
                ): (null)}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>

  );
};

export default ProjectsPage;
