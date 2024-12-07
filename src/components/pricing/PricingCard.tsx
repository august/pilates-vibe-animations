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
  );
};