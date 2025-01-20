import clsx from 'clsx';

const ProjectFeatures = ({ projectFeatures = [] }) => {
  const Feature = ({ title, content, removed }) => {
    return (
      <div
        className={clsx('feature-one space-y-1 mb-6', {
          'line-through': removed,
        })}
      >
        <p className="font-semibold">{title}</p>
        <ul className="list-disc list-inside">
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section className="flex flex-col md:flex-row justify-between my-10">
      <div className="flex flex-col mb-4">
        <h2 className="font-semibold mb-3">Features</h2>
        {projectFeatures.map(({ title, content, removed }, index) => (
          <Feature
            key={index}
            title={title}
            content={content}
            removed={removed}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectFeatures;
