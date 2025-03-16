import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";

interface PricingCardProps{
    name : string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant: "default" | "outline";
    highlighted?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({ 
    name, price, period, description, features, buttonText, buttonVariant, highlighted = false 
  }) => {
    return (
      <div className={cn(
        "rounded-xl p-6 transition-all duration-300",
        highlighted 
          ? "border-2 border-primary shadow-elevated transform scale-105" 
          : "border border-border"
      )}>
        {highlighted && (
          <div className="rounded-full bg-primary/10 text-primary text-xs font-medium px-3 py-1 inline-block mb-4">
            Most Popular
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="flex items-baseline mb-1">
          <span className="text-3xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground ml-1">{period}</span>}
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <Button 
          variant={buttonVariant} 
          className={cn("w-full mb-6", highlighted && buttonVariant === "default" && "bg-primary")}
        >
          {buttonText}
        </Button>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };