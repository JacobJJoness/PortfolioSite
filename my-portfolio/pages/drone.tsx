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
        <h1 className="text-4xl font-mono mb-6 text-center">The Oceanic Sampling Drone</h1>

        {/* YouTube Video */}
        <div className="aspect-w-16 aspect-h-9 mb-8 width-full bg-pink-500 flex items-center justify-center">
          <iframe
            className="rounded-lg shadow-lg self-center h-[50vh] w-full"
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
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
            The Oceanic Sampling Drone was an ambitious project aimed at developing a remotely operated underwater vehicle (ROV) capable of collecting sediment samples from ocean depths of up to 85 meters. Designed as a cost-effective and flexible alternative to traditional marine research methods, the drone sought to provide researchers and environmental agencies with a more accessible solution for oceanic sampling. While the project ultimately faced technical setbacks, the research, development, and lessons learned contributed valuable insights for future endeavors.
            </p>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Abstract</h2>
            <p className="text-gray-700 dark:text-gray-300">
            The Oceanic Sampling Drone was developed as a prototype for marine research institutions, environmental agencies, and government organizations requiring efficient sediment sampling from the ocean floor. The project aimed to create a user-controlled drone capable of diving to significant depths and collecting samples without the need for large research vessels or human divers.
            </p>
          </section>


          {/* Goals and Actions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">User Needs</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Current oceanic sampling methods are costly, time-consuming, and require substantial infrastructure. The primary users—marine researchers and environmental agencies—demand a more efficient, autonomous, and cost-effective solution. The Oceanic Sampling Drone aimed to fulfill these needs by offering:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Remote operation to eliminate the risks associated with human divers.</li>
              <li>Targeted sediment collection to provide precise sampling capabilities.</li>
              <li>Faster deployment and retrieval to enhance response times in environmental monitoring scenarios.</li>
            </ul>

          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Prior Art</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Existing solutions rely on large vessels, manned submersibles, or complex robotic systems. While effective, these methods are not always viable for smaller research teams or time-sensitive projects. By leveraging an open-source aquatic drone design and modifying it for sediment sampling, the project sought to develop a more accessible and specialized alternative.            </p>
          </section>
          <section>
          <p className="text-gray-700 dark:text-gray-300">
            The project was structured around adapting an open-source underwater drone (cpsdrone.com) to include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>A remotely controlled sampling mechanism for sediment collection.</li>
              <li>Onboard sensors and cameras for enhanced navigation and sample verification.</li>
              <li>A modular design to allow future enhancements and research applications.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              The drone was designed to operate via a user-friendly interface, ensuring researchers could maneuver it effectively in various underwater environments.
            </p>
          </section>

          <section>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Deliverables</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Despite its ultimate technical failure, the project aimed to deliver:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>A fully assembled and integrated drone with sampling capabilities.</li>
              <li>A user-controlled interface for real-time operation.</li>
              <li>Technical documentation detailing the design, challenges, and potential improvements.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Development Lifecycle</h2>
            <p className="text-gray-700 dark:text-gray-300">
            The project followed an Agile development model to accommodate rapid iterations and adjustments. Success criteria included the completion of a working feature and comprehensive documentation for future iterations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Customer Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
            Professor Kadir Demir served as the project sponsor, providing valuable insights into the feasibility and practical applications of the drone. Additional collaboration with marine biology experts was sought to refine sampling methodologies.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Hardware</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The hardware requirements included:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Raspberry Pi (which ultimately failed before the first water test)</li>
              <li>Pixhawk flight controller</li>
              <li>Blue Robotics components</li>
              <li>Custom sampling mechanism</li>
              <li>Sensors and waterproof enclosures</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Software</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The software stack consisted of:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Pixhawk flight control system</li>
              <li>BlueOS for underwater navigation</li>
              <li>ArduSub firmware</li>
              <li>Custom user interface for manual drone operation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Project Outcome & Lessons Learned</h2>
            <p className="text-gray-700 dark:text-gray-300">
              While the project did not reach full deployment due to the Raspberry Pi failure, the team gained significant experience in underwater robotics, sensor integration, and real-world engineering challenges. Future improvements could include:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>More robust power management and redundancy to prevent hardware failures.</li>
              <li>Alternative control systems to replace the Raspberry Pi dependency.</li>
              <li>Enhanced testing protocols to identify potential failures earlier in development.</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300">
              The Oceanic Sampling Drone remains a promising concept with the potential for further refinement and success in future iterations.
            </p>

          </section>

          
        </div>
      </div>
    </div>
  );
};

export default Drone;
