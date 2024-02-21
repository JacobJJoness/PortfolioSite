// pages/resume.js

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import 'tailwindcss/tailwind.css';
import "../app/globals.css";


const Resume = () => {
  return (
    //Comment is for using a background image. Paste into line below to use a image
    // style={{backgroundImage: "url('/red.png')",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}
    <main className=" h-screen " style={{backgroundImage: "url('/back.png')",backgroundPosition: 'center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <ParticleBackground></ParticleBackground>
      <Head>
          <title>Resume</title>
      </Head>
      
      <Navbar/>
      

      <div className=" z-20 relative max-w-screen h-5/6 rounded-xl p-8 justify-center pt-0  font-mono overflow-y-auto scrollbar-hide bg-gray-200/50 dark:bg-zinc-800/30  ">
        
        
        <header className="mb-8">
          
          <h1 className="text-4xl font-bold mt-10 mb-2 text-center ">JACOB JONES</h1>
          <p className="text-center ">genjacob20@gmail.com | 361-585-9668 | 802 Purdue Rd., Corpus Christi, TX, 78418 | LinkedIN</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
          <p className="mb-2">Bachelor of Science in Computer Science</p>
          <p className="mb-2">Texas A&M University – Corpus Christi</p>
          <p className="mb-4">Expected Graduation - Spring 2024</p>
          <p>Concentration: Systems Programming</p>
        </section>

        <section className="mb-8">

          <h2 className="text-2xl font-bold mb-2">EXPERIENCE</h2>
          <div className="mb-6">
            <h3 className="text-lg font-bold">Freelance Web Development (December 2023 - Present)</h3>
            <p className="mb-2">Developer</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Delivering comprehensive product data analytics through the categorization and detailed examination of product data to assess its value and utility.</li>
              <li>Ensuring project compliance with local, regional, and state regulations to uphold legal standards.</li>
              <li>Leveraging React web technologies and Python for a variety of pertinent tasks, with the flexibility to adapt to other web development tools as project requirements evolve.</li>
              <li>Actively engaging in networking activities to identify and secure new client relationships.</li>
              <li>Collaborating with clients to establish realistic project scopes and objectives.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">I.T Service Desk (August 2021 - February 2022)</h3>
            <p className="mb-2">Student Worker</p>
            <ul className="list-disc ml-8 mb-4">
              <li>Maintain productivity efficiency in the workplace.</li>
              <li>Consistently resolving or investigating technological issues.</li>
              <li>Remain professional and courteous to clients.</li>
              <li>Flexibility and adaptability to learn on the spot.</li>
              <li>Remain efficient during remote work.</li>
              <li>Efficient utilization of Agiloft Ticketing System.</li>
              <li>Proficiency in Office Suite troubleshooting.</li>
              <li>Proficient use of Cisco Products and Troubleshooting (Cisco Webex, Jabber, Anyconnect, Etc).</li>
            </ul>
          </div>

        </section>

        <section>

          <h2 className="text-2xl font-bold mb-2">SKILLS</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-2">
            <div>
              <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
              <p>Python, C++, React, NextJs, Tailwind, Java, JavaScript</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Technical Skills</h3>
              <p>Documentation, Testing, Debugging, Hardware Troubleshooting, Programming, Proficient using Office Suite, Strong Customer Service</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
              <p>Teamwork, Communication, Problem Solving, Adaptability, Detail Oriented</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
