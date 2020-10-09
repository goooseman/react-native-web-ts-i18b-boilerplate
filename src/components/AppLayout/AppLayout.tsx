import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { T, TargemProvider } from "react-targem";
import styles from "./AppLayout.styles";
import translations from "src/i18n/translations.json";
import {
  SettingsContextProvider,
  useSettings,
} from "src/contexts/SettingsContext";

const AppLayoutInternal: React.FC<AppLayoutInternalProps> = ({
  children,
}: AppLayoutInternalProps) => {
  const { locale } = useSettings();

  return (
    <TargemProvider locale={locale} translations={translations}>
      <View style={styles.container}>
        <Text>
          <T message="Open up App.tsx to start working on your app!" />
        </Text>
        {children}
        <StatusBar style="auto" />
      </View>
    </TargemProvider>
  );
};
interface AppLayoutInternalProps extends React.PropsWithChildren<{}> {}

const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => (
  <SettingsContextProvider>
    <AppLayoutInternal>{children}</AppLayoutInternal>
  </SettingsContextProvider>
);

interface AppLayoutProps extends React.PropsWithChildren<{}> {}

export default AppLayout;
