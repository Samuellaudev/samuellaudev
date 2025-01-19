import MarqueeButton from '@/components/Animation/MarqueeButton';

const HeroSection = () => {
  return (
    <section className="py-32 text-[#565b5f] dark:text-white">
      <div className="mx-auto max-w-screen-xl px-4 md:flex md:flex-col md:items-center">
        <div className="mx-auto max-w-3xl text-center space-y-2">
          <h1
            className="pb-0 md:pb-2 text-5xl font-semibold text-transparent sm:text-5xl bg-gradient-to-r from-primary-400 to-secondary-600 bg-clip-text"
          >
            Developing code,
          </h1>
          <p className="pb-1 sm:block text-5xl font-semibold sm:text-5xl"> delivering value. </p>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Turn challenges into seamless, production-ready web applications that deliver results.
          </p>
        </div>
        <div className='mt-6 flex justify-center'>
          <MarqueeButton />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
