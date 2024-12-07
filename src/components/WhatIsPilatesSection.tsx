const WhatIsPilatesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal grid gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
              alt="Pilates Practice"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">What is Pilates?</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Pilates is a form of low-impact exercise that aims to strengthen muscles while improving postural alignment and flexibility. Developed by Joseph Pilates in the early 20th century, this method emphasizes quality of movement over quantity, focusing on:
            </p>
            <ul className="mt-6 space-y-4 text-lg text-charcoal/80">
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-moss"></div>
                Core strength and stability
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-moss"></div>
                Flexibility and mobility
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-moss"></div>
                Posture and alignment
              </li>
              <li className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-moss"></div>
                Mind-body connection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPilatesSection;