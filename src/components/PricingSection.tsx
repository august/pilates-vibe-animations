import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PricingCategory } from "./pricing/PricingCategory";

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

const PricingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-center font-serif text-3xl font-medium md:text-4xl mb-12">
            Pricing
          </h2>

          <Tabs defaultValue={pricingCategories[0].title} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8">
              {pricingCategories.map((category) => (
                <TabsTrigger
                  key={category.title}
                  value={category.title}
                  className="data-[state=active]:bg-moss data-[state=active]:text-white text-sm md:text-base px-2 py-1 md:px-4 md:py-2 whitespace-normal text-center min-h-[44px] h-auto"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {pricingCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <PricingCategory {...category} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;