import { useEffect } from "react";
import { Calendar, MapPin, Phone } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80"
            alt="Pilates Studio"
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

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Welcome to Our Studio
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              We believe in the transformative power of Pilates. Our studio offers
              a sanctuary where mind and body unite, guided by expert instructors
              who are passionate about your journey to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Team Section */}
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

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="reveal">
            <h2 className="text-center font-serif text-3xl font-medium md:text-4xl">
              Class Schedule
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm"
                >
                  <Calendar className="h-6 w-6 text-moss" />
                  <div>
                    <h3 className="font-medium">{item.class}</h3>
                    <p className="text-charcoal/80">
                      {item.day} - {item.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-moss py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="reveal grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Visit Us
              </h2>
              <div className="mt-8 space-y-4">
                <p className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  123 Wellness Street, City Center
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  (555) 123-4567
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-medium md:text-4xl">
                Get in Touch
              </h2>
              <button className="mt-8 rounded-full border border-white px-8 py-3 transition-colors hover:bg-white hover:text-moss">
                Book a Class
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

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

const schedule = [
  {
    class: "Mat Pilates",
    day: "Monday & Wednesday",
    time: "9:00 AM",
  },
  {
    class: "Reformer Flow",
    day: "Tuesday & Thursday",
    time: "10:30 AM",
  },
  {
    class: "Core & More",
    day: "Wednesday & Friday",
    time: "5:30 PM",
  },
  {
    class: "Advanced Practice",
    day: "Saturday",
    time: "11:00 AM",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Instructor",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
  },
  {
    name: "Emma Davis",
    role: "Reformer Specialist",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
  },
  {
    name: "Michael Chen",
    role: "Pre/Postnatal Expert",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  },
];

export default Index;
