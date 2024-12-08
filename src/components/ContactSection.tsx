import { MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
            <div className="mt-8">
              <button className="rounded-md border border-white px-8 py-3 transition-colors hover:bg-white hover:text-moss">
                Book a Class
              </button>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-medium md:text-4xl">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md border border-white px-8 py-3 transition-colors hover:bg-white hover:text-moss"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;