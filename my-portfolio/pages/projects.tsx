

import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

// Replace this with your actual project data
import projects from '../data/projects';

const ProjectsPage = () => {
  return (
    <div className="bg-black min-h-screen py-1 px-1 "style={{backgroundImage: "url('/back.png')",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <Navbar/>
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-white font-mono mb-8">The Jones Archives</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-md font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              {project.videoUrl ? (
                <video
                  className="w-full rounded-lg"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={project.videoUrl}
                />
              ) : (
                <img className="w-full rounded-lg font-mono" src={project.gifUrl} alt={`Project ${index + 1}`} />
              )}
              <h2 className="text-xl text-white font-mono mt-4">{project.title}</h2>
              <div className="mt-4 text-white font-mono">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
