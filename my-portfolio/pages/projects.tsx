

import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Replace this with your actual project data
import projects from '../data/projects';

const ProjectsPage = () => {
  return (
    <div className="bg-black min-h-screen py-1 px-1">
        <div className="flex items-center w-1/2 ">
                <Link href="/" className="text-white text-lg font-mono m-4 group rounded-lg border border-transparent px-3 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "> {/* Use Link to navigate back to the home page (you can adjust the href accordingly) */}
                   <Image
                      className="relative dark:drop-shadow-[0_0_0.35rem_#ff0303] "
                      src="/jjj.png"
                      alt="JJ Logo"
                      width={80}
                      height={80}
                      priority
                    />
                </Link>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-white font-mono mb-8">The Jones Archives</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-md font-mono">
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
              <button className="mt-2 px-4 py-2 rounded-lg bg-indigo-500 text-white font-mono">
                Show Description
              </button>
              <div className="mt-4 text-white hidden font-mono">
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
