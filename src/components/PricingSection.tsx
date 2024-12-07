import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-center font-serif text-3xl font-medium md:text-4xl mb-12">
            Pricing
          </h2>

          {pricingCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="max-w-3xl mx-auto mb-8 text-center">
                <h3 className="font-serif text-2xl mb-4">{category.title}</h3>
                <p className="text-charcoal/80">{category.description}</p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {category.options.map((option, index) => (
                  <Card 
                    key={index} 
                    className="group bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <CardHeader>
                      <CardTitle className="font-serif text-xl">{option.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <p className="text-3xl font-medium text-moss">
                          ${option.price}
                        </p>
                        {option.perPerson && (
                          <p className="text-sm text-charcoal/60">per person</p>
                        )}
                        {option.pricePerSession && (
                          <p className="text-sm text-charcoal/60">
                            (${option.pricePerSession} each)
                          </p>
                        )}
                      </div>
                      {option.details && (
                        <ul className="space-y-2 text-charcoal/80">
                          {option.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {category.showGetStarted && (
                <div className="text-center mt-8">
                  <p className="text-charcoal/80">
                    Get Started Today!
                    <br />
                    No contract. Cancel Anytime
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const pricingCategories = [
  {
    title: "Private Sessions",
    description: "Private Sessions are tailored to the needs and goals of each individual client with in-depth, personalized instruction. Perfect for the super beginner to prep for classes, prenatal, injuries or those looking to be on their own schedule, have privacy and enjoy the luxury of 100% undivided attention.",
    options: [
      {
        name: "Introductory Private",
        price: "69",
      },
      {
        name: "Single Session",
        price: "95",
      },
      {
        name: "5 Pack",
        price: "450",
        pricePerSession: "90"
      },
      {
        name: "10 Pack",
        price: "850",
        pricePerSession: "85"
      },
      {
        name: "20 Pack",
        price: "1600",
        pricePerSession: "80"
      }
    ],
    showGetStarted: true
  },
  {
    title: "Semi-Private Sessions",
    description: "Semi Private Sessions, aka Duets, are just like privates except 2 clients to 1 instructor. Know a friend or have a partner? Create your own workout time. Perfect for the super beginner or super advanced to practice moves not taught in a group setting or just to have your own time!",
    options: [
      {
        name: "Single Session",
        price: "65",
        perPerson: true
      },
      {
        name: "5 Pack",
        price: "300",
        pricePerSession: "60",
        perPerson: true
      },
      {
        name: "10 Pack",
        price: "550",
        pricePerSession: "55",
        perPerson: true
      },
      {
        name: "20 Pack",
        price: "1000",
        pricePerSession: "50",
        perPerson: true
      }
    ],
    showGetStarted: false
  },
  {
    title: "Trio Sessions",
    description: "Trio Sessions, aka Trio's are just like privates except 3 clients to 1 instructor.",
    options: [
      {
        name: "Single Session",
        price: "55",
        perPerson: true
      },
      {
        name: "5 Pack",
        price: "250",
        pricePerSession: "50",
        perPerson: true
      },
      {
        name: "10 Pack",
        price: "450",
        pricePerSession: "45",
        perPerson: true
      },
      {
        name: "20 Pack",
        price: "800",
        pricePerSession: "40",
        perPerson: true
      }
    ],
    showGetStarted: true
  },
  {
    title: "Group Classes",
    description: "Group Reformer Classes are a comprehensive full body workout with special focus on the core. Most classes are mixed level with options to modify and advance to ensure every body feels safe, challenged and accomplished. New to Pilates? Starting with an Intro Private is highly recommended to feel confident attending a group and to keep you safe.",
    options: [
      {
        name: "First Class",
        price: "25",
      },
      {
        name: "Introductory Classes",
        price: "109",
        details: ["4 classes"]
      },
      {
        name: "Single Session",
        price: "45"
      },
      {
        name: "5 Pack",
        price: "195",
        pricePerSession: "39"
      },
      {
        name: "10 Pack",
        price: "350",
        pricePerSession: "35"
      },
      {
        name: "20 Pack",
        price: "600",
        pricePerSession: "30"
      },
      {
        name: "30 Pack",
        price: "810",
        pricePerSession: "27"
      }
    ],
    showGetStarted: false
  },
  {
    title: "Monthly Passes",
    description: "Get the benefits of Pilates at a special monthly price! Book up to 4 classes per week. 3 month commitment required.",
    options: [
      {
        name: "Monthly",
        price: "279",
      },
      {
        name: "One month pass",
        price: "299"
      }
    ],
    showGetStarted: true
  },
  {
    title: "Virtual Classes",
    description: "Get all the benefits of the Reformer from the convenience of your home!",
    options: [
      {
        name: "Virtual Reformer Class",
        price: "25"
      }
    ],
    showGetStarted: true
  }
];

export default PricingSection;