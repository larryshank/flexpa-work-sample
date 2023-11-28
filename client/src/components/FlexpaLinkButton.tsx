declare const FlexpaLink: {
  open: () => Record<string, unknown>;
};

export default function FlexpaLinkButton() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl text-center py-8">
        To view a quick summary of your claims, first link your health plan with
        Flexpa Link
      </div>
      <button
        onClick={() => FlexpaLink.open()}
        className="bg-flexpa-600 hover:bg-flexpa-700 text-white text-xl font-bold py-2 px-4 rounded w-fit"
      >
        Link Health Plan
      </button>
    </div>
  );
}
