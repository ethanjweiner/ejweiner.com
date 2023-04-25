'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home" className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl ">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-16 px-5 py-16 sm:py-32 md:py-64 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={275}
            height={275}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-3xl font-bold mt-6 md:mt-0 md:text-4xl">
            Ethan Weiner
          </h1>
          <p className="text-lg mt-4 mb-8 md:text-xl">
            Hi, I'm Ethan! I{"'"}m a full-stack software engineer based in
            Boston, experienced in the JavaScript and Ruby ecosystems.
          </p>
          <p className="text-lg mt-4 mb-8 md:text-xl">
            I recently created{' '}
            <a
              className="text-indigo-600 dark:text-indigo-400 underline"
              href="https://www.seamless-cicd.com"
              target="_blank"
              rel="noreferrer"
            >
              Seamless
            </a>
            , a CI/CD tool for containerized microservices.
          </p>
          <a
            href="/ethan_weiner_resume.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 bg-indigo-600 rounded shadow hover:bg-indigo-700 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1 inline"
              >
                <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z" />
                <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z" />
                <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="seamless"
          className="cursor-pointer"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
