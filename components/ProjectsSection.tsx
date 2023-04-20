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
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Selected Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-indigo-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
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
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
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
