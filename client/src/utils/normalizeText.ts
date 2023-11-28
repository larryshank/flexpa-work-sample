export default function normalizeText(text: string) {
  const words = text.split(" ");

  const strings = words.map((word) => {
    // Skip titles and suffixes
    if (word.endsWith(".")) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return strings.join(" ");
}
