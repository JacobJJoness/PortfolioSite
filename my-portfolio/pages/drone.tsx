import React from 'react';
import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HomeBackgroundParticles from '@/components/HomeBackgroundParticles';
import FramerBackground from '@/components/FramerBackground';

const Drone: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <FramerBackground />
      <HomeBackgroundParticles />
      <Navbar />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-mono mb-6 text-center">Video Report Page</h1>

        {/* YouTube Video */}
        <div className="aspect-w-16 aspect-h-9 mb-8 width-full ">
          <iframe
            className="rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/KRAyVaUF3nw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Report Sections */}
        <div className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This section provides an overview of the video content and its purpose.
            </p>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Here we introduce the context and background of the topic discussed in the video.
            </p>
          </section>

          {/* Image */}
          <div className="my-8 flex justify-center">
            <Image
              src="/placeholder-image.jpg"
              alt="Placeholder image"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Goals and Actions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Goals and Actions</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This section outlines the objectives and the steps taken to achieve them.
            </p>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Additional details or repeated introduction content can go here.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Drone;
