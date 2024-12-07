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
      <div className="max-w-3xl mx-auto mb-8 text-center px-4">
        <h3 className="font-serif text-xl md:text-2xl mb-4">{title}</h3>
        <p className="text-charcoal/80 text-sm md:text-base">{description}</p>
      </div>
      
      <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {options.map((option, index) => (
          <PricingCard key={index} option={option} />
        ))}
      </div>
      
      {showGetStarted && (
        <div className="text-center mt-8">
          <p className="text-charcoal/80 text-sm md:text-base">
            Get Started Today!
            <br />
            No contract. Cancel Anytime
          </p>
        </div>
      )}
    </div>
  );
};