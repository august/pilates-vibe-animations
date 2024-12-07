import { PricingCard } from "./PricingCard";

interface PricingCategoryProps {
  title: string;
  description: string;
  options: Array<{
    name: string;
    price: string;
    perPerson?: boolean;
    pricePerSession?: string;
    details?: string[];
  }>;
  showGetStarted?: boolean;
}

export const PricingCategory = ({
  title,
  description,
  options,
  showGetStarted,
}: PricingCategoryProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <h3 className="font-serif text-2xl mb-4">{title}</h3>
        <p className="text-charcoal/80">{description}</p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => (
          <PricingCard key={index} option={option} />
        ))}
      </div>
      
      {showGetStarted && (
        <div className="text-center mt-8">
          <p className="text-charcoal/80">
            Get Started Today!
            <br />
            No contract. Cancel Anytime
          </p>
        </div>
      )}
    </div>
  );
};