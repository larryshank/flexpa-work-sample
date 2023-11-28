import { Benefit } from "../flexpa_types";
import BenefitCard from "./BenefitCard";

interface BenefitsProps {
  benefit: Benefit;
}

export default function Benefits({ benefit }: BenefitsProps) {
  const { entry: entries } = benefit;

  return (
    <div
      className={
        entries && entries?.length > 1
          ? "grid gap-4 grid-cols-1 md:grid-cols-2 px-6 mx-auto max-w-screen-xl"
          : "grid grid-cols-1 px-6 mx-auto max-w-screen-xl"
      }
    >
      {entries?.map((entry) => (
        <BenefitCard key={entry?.resource?.id} claim={entry.resource} />
      ))}
    </div>
  );
}
