import React from 'react';
import Image from 'next/image';
import SlideUp from './SlideUp';

const projects = [
  {
    name: 'JaguarBin',
    description:
      'A tool for collecting and inspecting HTTP requests and webhooks',
    technologies: [
      'Socket.io',
      'Nginx',
      'PostgreSQL',
      'MongoDB',
      'Digital Ocean Droplet',
    ],
    image: '/jaguar-bin.png',
  },
  {
    name: 'BloomShare',
    description:
      'A community-focused plant encyclopedia search tool and inventory manager, powered by USDA',
    technologies: ['Ruby', 'Sinatra', 'PostgreSQL', 'HTML/CSS'],
    image: '/bloom-share.png',
  },
  {
    name: 'JobItinerary',
    description:
      'A tool for small companies to track employee work and invoice customers',
    technologies: ['Vue.js', 'Firebase', 'Ionic'],
    image: '/jobitinerary.png',
  },
  {
    name: 'Visualize the Web',
    description:
      'Simulates and visualizes the geographic transmission of data between IP addresses',
    technologies: ['Python', 'Flask', 'Javascript'],
    image: '/visualize-the-web.png',
  },
  {
    name: 'The Smooches',
    description: 'A Dockerized minimal slideshow application',
    technologies: ['React', 'Express', 'Docker Compose', 'EC2', 'S3'],
    image: '/the-smooches.png',
  },
  {
    name: 'Playlist Blender',
    description:
      'A tool for algorithmically combining user playlists from third-party music services like Spotify, Youtube, and Soundcloud',
    technologies: ['Vue', 'Javascript'],
    image: '/playlist-blender.png',
  },
  {
    name: 'BHS Scholarship Portal',
    description:
      'A platform for submitting and reviewing scholarship applications',
    technologies: ['Vue', 'Firebase'],
    image: '/bhs-scholarship-portal.png',
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="p-5 mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl "
    >
      <h1 className="mt-10 text-center font-bold text-4xl mb-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 mr-2 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
        Other Selected Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28 ">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mt-8 md:mt-0 mb-6">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-md leading-7 mb-4 text-neutral-500 dark:text-neutral-300">
                      <span className="italic">Built with</span>:{' '}
                      {project.technologies?.join(', ')}
                    </p>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
