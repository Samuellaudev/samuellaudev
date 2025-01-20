import Image from 'next/image';

const ProjectDescription = ({
  projectDescription,
  url,
  technologies,
  sourceCode,
}) => {
  return (
    <section className="flex flex-col md:flex-row justify-between my-16">
      <div className="flex flex-col space-y-1 mb-4 md:mr-24">
        <h2 className="font-semibold">Project Description</h2>
        <p>{projectDescription}</p>
      </div>
      <div className="flex flex-col w-full">
        <div className="project-url mb-4">
          <p className="font-semibold pb-1">URL</p>
          <a href={url} target="_blank" className="hover:text-primary-500">
            {url}
          </a>
        </div>
        <div className="project-technologies space-y-1 mb-4">
          <p className="font-semibold">Technologies</p>
          <p>{technologies}</p>
        </div>
        <div className="project-source-code">
          <p className="font-semibold">Source Code</p>
          <div className="flex flex-row space-x-2">
            <a href={sourceCode} target="_blank">
              <Image
                src="/svg/socialMedia/icon-github.svg"
                alt="github icon"
                width={25}
                height={25}
                className="pt-2 cursor-pointer duration-200 brightness-0 hover:brightness-[50%] hover:contrast-[100%] dark:brightness-200"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
