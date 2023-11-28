import Alert from "./components/Alert";
import Benefits from "./components/Benefits";
import FlexpaLinkButton from "./components/FlexpaLinkButton";
import LoadingIndicator from "./components/LoadingIndicator";
import useBenefits from "./hooks/useBenefits";

export default function FlexpaView() {
  const { benefit, isLoading, isError } = useBenefits();

  if (isLoading) return <LoadingIndicator />;
  if (isError) return <Alert />;

  return <>{benefit ? <Benefits benefit={benefit} /> : <FlexpaLinkButton />}</>;
}
