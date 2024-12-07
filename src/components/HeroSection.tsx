const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
          alt="Pilates Group Class"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative flex h-full items-center justify-center text-center">
        <div className="px-4">
          <h1 className="animate-fade-up font-serif text-5xl font-medium text-white md:text-7xl">
            Elevate Your Practice
          </h1>
          <p className="animate-fade-up font-sans text-lg text-white/90 animation-delay-200 md:text-xl">
            Premium Pilates Studio in the Heart of the City
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;