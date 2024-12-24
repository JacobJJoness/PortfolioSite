import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import HomeBackgroundParticles from '@/components/HomeBackgroundParticles';
import FramerBackground from '@/components/FramerBackground';

const Resume = () => {
  return (
    <main className="relative min-h-screen py-1 px-1">
      <HomeBackgroundParticles />
      <FramerBackground />
      <Head>
        <title>Jacob Jones - Resume</title>
      </Head>
      
      <Navbar />
      
      <div className="z-20 relative max-w-screen-xl mx-auto p-8 justify-center pt-0 font-mono overflow-y-auto scrollbar-hide">
        <header className="bg-gray-700/30 rounded-lg p-6 shadow-lg text-center font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30 mb-8">
          <h1 className="text-4xl font-bold mt-10 mb-2 ">JACOB JONES</h1>
          <p className="mb-2">802 Purdue Rd., Corpus Christi, TX 748418 | (361) 585-9668 | genjacob20@gmail.com | LinkedIn</p>
          <p className="mb-4">Detail-Oriented | Analytical | Critical Thinker</p>
          <p>Computer Science student at Texas A&M, graduated in December 2024, with over two years of experience in software and hardware troubleshooting. Skilled in Web Design, Programming, and Information Technology. Proficient in Microsoft Office, Knowledge Base utilization, Interpersonal Skills, Advertising, and Customer Service.</p>
        </header>

        {/* Skills and Education Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Box */}
          <div className="bg-gray-700/30 rounded-lg p-6 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30">
            <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
            <ul className="list-disc ml-8">
              <li>Python</li>
              <li>C++</li>
              <li>React/React-Native</li>
              <li>Javascript</li>
              <li>Tailwind CSS</li>
              <li>Web Design & Development</li>
              <li>AutoCAD</li>
              <li>Visual Basic</li>
              <li>Software & Hardware Troubleshooting</li>
              <li>Programming</li>
            </ul>
          </div>

          {/* Education Box */}
          <div className="bg-gray-700/30 rounded-lg p-6 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30">
            <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
            <p className="mb-2">Bachelor of Science in Computer Science</p>
            <p className="mb-2">Texas A&M University – Corpus Christi</p>
            <p>Graduated: December 2024</p>
            <p className="mt-2">Concentration: Systems Programming</p>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="bg-gray-700/30 rounded-lg p-6 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30 mb-8">
          <h2 className="text-2xl font-bold mb-2">PROFESSIONAL EXPERIENCE</h2>
          
          {/* Christus Spohn Hospital */}
          <div className="mb-8">
            <h3 className="text-lg font-bold">Field Service Technician</h3>
            <p className="text-gray-400 mb-2">Christus Spohn Hospital, July 2024 – Present</p>
            <ul className="list-disc ml-8">
              <li>Respond to critical device issues throughout the hospital, assisting with repairs for over 700 devices.</li>
              <li>Manage shipment, installation, and maintenance of devices and hardware across 5 sites in South Texas.</li>
              <li>Provide high-quality, compassionate client support to hospital staff and leadership in high-pressure environments.</li>
              <li>Optimize time management by attending meetings and achieving goals efficiently.</li>
              <li>Document tasks and resolutions using the ServiceNow internal ticketing system.</li>
              <li>Collaborate with Field Service Technicians and leadership to ensure timely issue resolutions.</li>
              <li>Image 15+ devices per day to meet growing demand for hospital and clinic devices.</li>
              <li>Assist with several Epic system go-lives, ensuring smooth deployment of devices in collaboration with hospital staff.</li>
            </ul>
          </div>

          {/* Iconik Innovations */}
          <div className="mb-8">
            <h3 className="text-lg font-bold">Lead Web Designer</h3>
            <p className="text-gray-400 mb-2">Iconik Innovations, January 2024 – August 2024</p>
            <ul className="list-disc ml-8">
              <li>Led the design, development, and deployment of websites for over 15 local businesses.</li>
              <li>Managed full project lifecycle, ensuring alignment with business goals and user experience standards.</li>
              <li>Conducted 100+ cold calls, resulting in new clients and business growth.</li>
              <li>Collaborated with clients to deliver web solutions aligned with their brand and business needs.</li>
              <li>Created dynamic and user-friendly interfaces using various web technologies.</li>
              <li>Utilized Python for ethical web scraping of over 10,000 product images to support a new online store.</li>
            </ul>
          </div>

          {/* TAMACC I.T. Service Desk */}
          <div>
            <h3 className="text-lg font-bold">Student Worker</h3>
            <p className="text-gray-400 mb-2">TAMACC I.T. Service Desk, August 2021 – February 2022</p>
            <ul className="list-disc ml-8">
              <li>Optimized workplace productivity by implementing strategies to improve efficiency and task completion.</li>
              <li>Troubleshot and resolved complex technical issues, offering solutions and effective communication with clients.</li>
              <li>Maintained professionalism in high-stress situations, resolving client issues and fostering trust.</li>
              <li>Demonstrated adaptability and quick learning, integrating new technologies and information to meet evolving needs.</li>
              <li>Utilized Agiloft Ticketing System to manage, prioritize, and resolve tasks, improving customer satisfaction.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
