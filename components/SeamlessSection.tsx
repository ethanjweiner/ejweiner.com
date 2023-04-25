import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Jupyter Notebooks' },
];

const AboutSection = () => {
  return (
    <div
      id="seamless"
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-slate-700 dark:via-purple-900 dark:to-slate-700 w-screen"
    >
      <section
        id="seamless"
        className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl "
      >
        <div className="my-12 md:pt-16 ">
          <h1 className="text-center font-bold text-4xl mb-6">
            <Image
              src="/seamless_logo.png"
              alt="Seamless Logo"
              width={40}
              height={40}
              className="inline mr-3"
            />
            Seamless
          </h1>

          <div className="items-stretch justify-center align-top md:p-4 md:text-left">
            <p className="text-stone-600 dark:text-stone-200 text-lg mb-10">
              Seamless is an open-source, low-config CI/CD tool for
              containerized microservice applications deployed to ECS Fargate.
              It features a CLI for AWS deployment, a real-time dashboard,
              integration testing with Docker Compose, log storage with Redis,
              and more. Read the case study{' '}
              <a
                href="https://www.seamless-cicd.com/case-study"
                target="_blank"
                className="text-indigo-600 dark:text-indigo-400 underline"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <a
              href="https://www.seamless-cicd.com"
              target="_blank"
              rel="noreferrer"
              className="mb-10"
            >
              <Image
                src="/seamless.png"
                alt=""
                width={1200}
                height={1200}
                className="rounded-xl shadow-lg cursor-pointer"
              />
            </a>
            <p className="text-stone-600 dark:text-stone-200 text-lg my-12">
              Seamless tests, builds, and deploys microservices with a robust
              pipeline powered by AWS infrastructure, including Step Functions,
              ECS, and API Gateways.
            </p>

            <a
              href="https://www.seamless-cicd.com"
              target="_blank"
              rel="noreferrer"
              className="my-10"
            >
              <Image
                src="/seamless-architecture.png"
                alt=""
                width={1200}
                height={1200}
                className="cursor-pointer mt-10 rounded-xl border border-gray-300"
              />
            </a>

            <div className="flex justify-center my-12">
              <a
                href="https://www.seamless-cicd.com/case-study"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white border border-gray-300 dark:text-white"
              >
                <span className="w-full">Read The Case Study</span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 ml-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            {/* <hr className="h-1 my-10 bg-gray-400 dark:bg-gray-700" /> */}
          </div>
        </div>
      </section>
      {/* <hr className="w-screen bg-stone-500 h-1"></hr> */}
    </div>
  );
};

export default AboutSection;
