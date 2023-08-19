
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import Link from 'next/link';
import "../app/globals.css";
import Navbar from '@/components/Navbar';

// Replace this with your actual project data
import projects from '../data/projects';

const ProjectsPage = () => {
  return (
    <div className=" min-h-screen py-1 px-1 "style={{backgroundImage: "url('/back.png')",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <Navbar/>
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-mono mb-8">The Jones Archives</h1>
        <div className="max-w-screen overflow-y-auto scrollbar-hide" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {project.videoUrl ? (
                  <video
                    className="w-full rounded-lg"
                    controls
                    autoPlay={false}
                    loop
                    muted
                    playsInline
                    src={project.videoUrl}
                  />
                ) : (
                  <Image className="w-full rounded-lg font-mono " width="400" height="300" src={project.gifUrl} alt={`Project ${index + 1}`} />
                )}
                <h2 className="text-xl font-mono mt-4">{project.title}</h2>
                <div className="mt-4 font-mono">
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
