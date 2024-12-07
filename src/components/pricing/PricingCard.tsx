import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingOption {
  name: string;
  price: string;
  perPerson?: boolean;
  pricePerSession?: string;
  details?: string[];
}

export const PricingCard = ({ option }: { option: PricingOption }) => {
  return (
    <Card className="group bg-cream transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardHeader className="p-3 md:p-4">
        <CardTitle className="font-serif text-base md:text-xl break-words hyphens-auto">
          {option.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        <div className="mb-2 md:mb-3 text-center">
          <p className="text-xl md:text-3xl font-medium text-moss">
            ${option.price}
          </p>
          {option.perPerson && (
            <p className="text-xs md:text-sm text-charcoal/60">per person</p>
          )}
          {option.pricePerSession && (
            <p className="text-xs md:text-sm text-charcoal/60">
              (${option.pricePerSession} each)
            </p>
          )}
        </div>
        {option.details && (
          <ul className="space-y-1 md:space-y-1.5 text-charcoal/80 text-xs md:text-sm">
            {option.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};