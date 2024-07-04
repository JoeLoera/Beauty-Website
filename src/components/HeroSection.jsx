const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h3 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide font-semibold text-black leading-normal">
        “Beauty begins the moment you decide to be yourself”
        <br />- Charlotte Tilbury
      </h3>
      <p className="mt-10 sm:mt-20 text-xl sm:text-2xl lg:text-3xl text-center text-neutral-500 max-w-xs sm:max-w-lg lg:max-w-4xl">
        Michelle excels in creating stunning looks for weddings, events, and
        photoshoots. With years of experience, she enhances natural beauty,
        leaving clients looking and feeling their best. For any occasion,
        Michelle is LA's go-to makeup artist.
      </p>
    </div>
  );
};

export default HeroSection;
