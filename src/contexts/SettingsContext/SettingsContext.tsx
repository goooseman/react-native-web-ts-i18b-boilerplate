import React, { useContext } from "react";
import { defaultThemeName, ThemeName } from "src/config/themes";
import { Locale, locales } from "src/config/locales";
import { getBrowserLocale } from "src/utils/locales";

const LOCAL_STORAGE_KEY = "settings";

interface SettingsContextProviderState {
  locale: Locale;
  theme: ThemeName;
}

export interface SettingsContext extends SettingsContextProviderState {
  setSettings: (state: Partial<SettingsContextProviderState>) => void;
  resetSettings: () => void;
}

const getInitialValues = (): SettingsContextProviderState => ({
  theme: defaultThemeName,
  locale: getBrowserLocale(
    locales.map((l) => l.key),
    locales[0].key
  ),
});

const SettingsContext = React.createContext<SettingsContext>({
  ...getInitialValues(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSettings: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  resetSettings: () => {},
});

export class SettingsContextProvider extends React.PureComponent<
  Partial<SettingsContextProviderState>,
  SettingsContextProviderState
> {
  constructor(props: Partial<SettingsContext>) {
    super(props);
    this.state = {
      ...getInitialValues(),
      ...this.getSettingsFromLocalStorage(),
    };
  }

  public render(): React.ReactNode {
    const { state, props } = this;

    const providerValue = {
      ...state,
      ...props,
      setSettings: this.setSettings,
      resetSettings: this.resetSettings,
    };

    return (
      <SettingsContext.Provider value={providerValue}>
        {props.children}
      </SettingsContext.Provider>
    );
  }

  private setSettings = (settings: Partial<SettingsContextProviderState>) => {
    this.setState((state: SettingsContextProviderState) => {
      const newSettings = {
        ...state,
        ...settings,
      };
      window.localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(newSettings)
      );
      return newSettings;
    });
  };

  private getSettingsFromLocalStorage = (): Partial<
    SettingsContextProviderState
  > => {
    const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!json) {
      return {};
    }

    return JSON.parse(json);
  };

  private resetSettings = () => {
    this.setState(getInitialValues());
  };
}

export const useSettings = (): SettingsContext => useContext(SettingsContext);
