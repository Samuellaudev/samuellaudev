import Image from 'next/image';

const ProjectScreens = ({ projectScreens = [] }) => {
  return (
    <>
      {projectScreens.map(({ title, images }, index) => (
        <div key={index} className="flex flex-col my-10 mb-4">
          <h2 className="font-semibold mb-3">{title}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {images?.map((imagePath, imgIndex) => (
              <Image
                key={`${index}-${imgIndex}`}
                src={imagePath}
                alt={`${title} screenshot`}
                width={650}
                height={650}
                className="rounded-sm mx-auto shadow-md dark:border"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectScreens;
