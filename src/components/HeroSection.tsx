const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://cdn.midjourney.com/8670978d-d594-42be-b501-c5933ca4f4a0/0_3.jpeg"
          alt="Pilates Group Class"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative flex h-full items-end pb-32 justify-center text-center">
        <div className="px-4">
          <h1 className="animate-fade-up font-serif text-5xl font-medium text-white md:text-7xl mb-8">
          Transform Your Body, Elevate Your Mind
          </h1>
          <p className="animate-fade-up font-sans text-lg text-white/90 animation-delay-200 md:text-xl">
            <span className="font-medium block font-weight-bold text-4xl">The Pilates Connection</span>
            Premium Pilates Studio in Marina del Rey
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;