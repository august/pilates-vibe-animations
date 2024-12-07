import { MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;