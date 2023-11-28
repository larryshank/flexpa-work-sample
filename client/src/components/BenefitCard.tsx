import moment from "moment";
import { Resource } from "../flexpa_types";
import normalizeText from "../utils/normalizeText";

interface BenefitCardProps {
  claim?: Resource;
}

export default function BenefitCard({ claim }: BenefitCardProps) {
  const code = claim?.type?.coding?.[0].code?.toLowerCase();
  const title =
    (code && `${code.charAt(0).toUpperCase() + code.slice(1)} Claim`) ||
    "Claim";
  const insurer = claim?.insurer?.display;
  const provider = claim?.provider?.display;
  const outcome = claim?.outcome;

  return (
    <div className="flex flex-col bg-white border-solid border-t-4 border-t-flexpa-600 shadow-md rounded-xl">
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold ">{title}</h3>
        <div className="flex justify-between">
          <div className="font-bold">Billable Period</div>
          <div>
            {claim?.billablePeriod
              ? `${moment(claim?.billablePeriod?.start).format(
                  "MMM DD YYYY"
                )} - ${moment(claim?.billablePeriod?.end).format(
                  "MMM DD YYYY"
                )}`
              : "N/A"}
          </div>
        </div>
        <ClaimRow title="Status" value={claim?.status} />
        <ClaimRow title="Insurer" value={insurer} />
        <ClaimRow title="Provider" value={provider} />
        <ClaimRow title="Outcome" value={outcome} />
      </div>
    </div>
  );
}

interface ClaimRowProps {
  title: string;
  value?: string;
}

function ClaimRow({ title, value }: ClaimRowProps) {
  let displayText = "N/A";
  if (value) {
    displayText = normalizeText(value);
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold">{title}</div>
        <div>{displayText}</div>
      </div>
    </>
  );
}
