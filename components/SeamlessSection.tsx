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
    <section id="seamless">
      <div className="my-12 md:pt-16">
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
            Seamless is an open-source, low-config CI/CD tool for containerized
            microservice applications deployed to ECS Fargate. It features a CLI
            for AWS deployment, a real-time dashboard, integration testing with
            Docker Compose, log storage with Redis, and more. Read the case
            study{' '}
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
                className="cursor-pointer mt-10 rounded-xl"
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
