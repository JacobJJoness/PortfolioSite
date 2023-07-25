// pages/resume.js

import Head from 'next/head';

export default function Resume() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-black text-white" style={{ backgroundImage: 'url(/red.png)' }}>
      <Head>
        <title>Jacob Jones - Resume</title>
      </Head>
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">JACOB JONES</h1>
        <p className="text-lg">genjacob20@gmail.com | 361-585-9668 | 802 Purdue Rd., Corpus Christi, TX, 78418 | LinkedIN</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
        <p>Bachelor of Science in Computer Science - Texas A&amp;M University – Corpus Christi</p>
        <p>Expected Graduation - Spring 2024</p>
        <p>Concentration: Systems Programming</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold">Half Price Books (May 2022 - June 2023)</h3>
          <p>Bookseller</p>
          <ul className="list-disc ml-8">
            <li>Responsible for maintaining store cleanliness and shopability.</li>
            <li>Provide excellent customer care and service.</li>
            <li>Handle used book purchasing and donations.</li>
            <li>Cash handling and efficient POS system utilization.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">I.T Service Desk (August 2021 - February 2022)</h3>
          <p>Student Worker</p>
          <ul className="list-disc ml-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Programming Languages</h3>
            <p>Python, C++, React, Java, JavaScript</p>
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
  );
}
