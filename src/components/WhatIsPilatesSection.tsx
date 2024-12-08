import { Separator } from "@/components/ui/separator";
import { Dumbbell } from "lucide-react";

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
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-3xl font-medium md:text-4xl">What is Pilates?</h2>
            <p className="text-lg leading-relaxed text-charcoal/80">
              Pilates is a dynamic system of physical and mental conditioning that emphasizes resistance over impact. Its aim is to strengthen and stretch your entire body while calming and focusing your mind. The secret is in the details: every movement is intentional, prioritizing quality over quantity.
            </p>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium">Core Benefits</h3>
              <ul className="space-y-3 text-lg text-charcoal/80">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-moss"></div>
                  Strengthens and lengthens muscles without bulk
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-moss"></div>
                  Improves posture and alignment
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-moss"></div>
                  Enhances flexibility and joint stability
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-moss"></div>
                  Reduces stress and increases endurance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto my-16 w-2/3 relative">
          <Separator className="bg-taupe/20" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
            <Dumbbell className="h-6 w-6 text-taupe" />
          </div>
        </div>

        <div className="reveal mt-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium">Getting Started</h3>
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-medium">What to Expect</h4>
              <p className="text-lg leading-relaxed text-charcoal/80">
                If you're new to Pilates, we recommend starting with an Introductory Private Session. Our classes utilize Pilates Reformers, Jump boards, and Chairs, with springs providing guidance and resistance throughout your workout. We build from fundamentals, gradually introducing new exercises to ensure proper form and maximum benefit.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Regular practice will help you stand taller, move with grace, and feel amazing both physically and mentally!
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-medium">Proper Attire</h3>
            <div className="space-y-4">
              <h4 className="font-serif text-xl font-medium">What to Wear</h4>
              <p className="text-lg leading-relaxed text-charcoal/80">
                Wear fitted workout clothes that you feel comfortable moving in. Since some exercises involve lying down with legs or arms in the air, ensure your clothing moves with you.
              </p>
              <div className="rounded-lg bg-cream p-6">
                <h5 className="font-serif text-lg font-medium">Important Note</h5>
                <p className="mt-2 text-charcoal/80">
                  Shoes are not allowed on the equipment, but socks are required for sanitation. We recommend purchasing our Toe Sox with grippies (available at the studio for $17) to prevent slipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPilatesSection;