export const locales = [
  {
    key: "en-GB",
    internationalName: "English (GB)",
    localName: "English (GB)",
  },
  {
    key: "en-US",
    internationalName: "English (US)",
    localName: "English (US)",
  },
] as const;

export type Locale = typeof locales[number]["key"];
