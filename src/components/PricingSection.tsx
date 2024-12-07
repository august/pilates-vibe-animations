import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="reveal">
          <h2 className="text-center font-serif text-3xl font-medium md:text-4xl mb-12">
            Pricing
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingOptions.map((option, index) => (
              <Card key={index} className="group bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{option.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-medium text-moss mb-4">${option.price}</p>
                  <ul className="space-y-2 text-charcoal/80">
                    {option.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const pricingOptions = [
  {
    name: "Single Session",
    price: "95",
    details: [
      "55-minute private session",
      "Personalized attention",
      "Perfect for first-time clients"
    ]
  },
  {
    name: "5 Session Package",
    price: "450",
    details: [
      "$90 per session",
      "Valid for 2 months",
      "Recommended for regular practice"
    ]
  },
  {
    name: "10 Session Package",
    price: "850",
    details: [
      "$85 per session",
      "Valid for 4 months",
      "Best value for committed clients"
    ]
  }
];

export default PricingSection;