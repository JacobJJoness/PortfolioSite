import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import "../app/globals.css";
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import ProjectParticles from '@/components/ProjectParticles';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/JacobJJoness/repos');
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          console.error('API did not return an array:', data);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="relative min-h-screen py-1 px-1" style={{
      backgroundImage: "url('/back.png')",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <ProjectParticles />
      <Navbar />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-mono mb-8">Jacob&apos;s Public Github Repos</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-gray-700/30 rounded-lg p-4 shadow-lg font-mono border-b border-gray-200 bg-gradient-to-b from-gray-100 pb-6 pt-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200/30 lg:p-4 lg:dark:bg-zinc-800/30"
            >
              <h2 className="text-xl font-mono mt-4">{repo.name}</h2>
              <div className="mt-4 font-mono">
                <p>{repo.description || 'No description provided'}</p>
                <Link className="text-blue-500 underline" href={repo.html_url}>
                  View Repository
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubRepos;
