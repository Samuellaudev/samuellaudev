import React from 'react';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  isPublicLink,
}) => {
  return (
    <div className="rounded-md border border-[#ADB7BE]  hover:shadow-2xl hover:-translate-y-1 duration-200">
      <div
        className="relative group h-52 md:h-52 rounded-t-xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div class="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-60">
          <div class="flex justify-between w-full">
            <div class="font-normal">
              <p class="text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#565b5f] dark:text-white dark:bg-[#181818] py-2 px-4 dark:rounded dark:border dark:border-b-[0.05px] dark:border-t-transparent dark:border-x-transparent">
        {isPublicLink ? (
          <a href={previewUrl} target="_blank">
            <h5 className="text-lg text-center font-medium mb-1">{title}</h5>
          </a>
        ) : (
          <Link href={previewUrl}>
            <h5 className="text-lg text-center font-medium mb-1">{title}</h5>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
