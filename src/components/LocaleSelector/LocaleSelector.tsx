import React from "react";
import { locales, Locale } from "src/config/locales";
import { useSettings } from "src/contexts/SettingsContext";

const LocalSelector: React.FC<LocalSelectorProps> = (
  props: LocalSelectorProps
) => {
  const { setSettings, locale } = useSettings();
  const handleLocaleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const value = ev.currentTarget.value;
    setSettings({
      locale: value as Locale,
    });
  };

  return (
    <select onChange={handleLocaleChange} value={locale}>
      {locales.map((l) => (
        <option value={l.key} key={l.key}>
          {l.localName} ({l.internationalName})
        </option>
      ))}
    </select>
  );
};

interface LocalSelectorProps {}

export default LocalSelector;
