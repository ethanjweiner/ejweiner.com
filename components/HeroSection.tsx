'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-16 px-5 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
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
          <h1 className="text-2xl font-bold mt-6 md:mt-0 md:text-4xl">
            Ethan Weiner
          </h1>
          <p className="text-md mt-4 mb-6 md:text-xl">
            I{"'"}m a full-stack software engineer based in Boston, experienced
            in JavaScript, Ruby, React, Express, PostgreSQL, Docker, and AWS. I
            recently created{' '}
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
            href="https://www.seamless-cicd.com/case-study"
            className="text-neutral-100 font-semibold px-6 py-3 bg-indigo-600 rounded shadow hover:bg-indigo-700 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            Read The Case Study
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
