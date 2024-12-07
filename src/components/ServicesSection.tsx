const services = [
  {
    name: "Private Sessions",
    description:
      "One-on-one attention tailored to your specific needs and goals.",
  },
  {
    name: "Group Classes",
    description:
      "Experience the energy of collective movement in our signature classes.",
  },
  {
    name: "Prenatal Pilates",
    description:
      "Specialized sessions designed for expecting mothers at every stage.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-lg bg-cream p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="font-serif text-2xl font-medium">{service.name}</h3>
              <p className="mt-4 text-charcoal/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;