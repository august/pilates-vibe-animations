const team = [
  {
    name: "Kimberly Dye",
    role: "Owner/Instructor",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6eec0b7d0c91444dc37ca9/1550784498468-YVZQ0TKNVZ5NFVVZQUJ4/Kim+Dye.jpg",
  },
  {
    name: "Erin Gilmore",
    role: "Instructor",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6eec0b7d0c91444dc37ca9/1550784498468-YVZQ0TKNVZ5NFVVZQUJ4/Kim+Dye.jpg",
  },
  {
    name: "Jill Dailey",
    role: "Instructor",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6eec0b7d0c91444dc37ca9/1550784498468-YVZQ0TKNVZ5NFVVZQUJ4/Kim+Dye.jpg",
  },
  {
    name: "Kimberly Dye",
    role: "Instructor",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6eec0b7d0c91444dc37ca9/1550784498468-YVZQ0TKNVZ5NFVVZQUJ4/Kim+Dye.jpg",
  },
  {
    name: "Kimberly Dye",
    role: "Instructor",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c6eec0b7d0c91444dc37ca9/1550784498468-YVZQ0TKNVZ5NFVVZQUJ4/Kim+Dye.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-center font-serif text-3xl font-medium md:text-4xl">
            Meet Our Instructors
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[400px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-medium">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-white/90">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;