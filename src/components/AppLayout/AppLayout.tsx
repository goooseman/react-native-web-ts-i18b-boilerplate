import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { T, TargemProvider } from "react-targem";
import styles from "./AppLayout.styles";
import translations from "src/i18n/translations.json";
import { Provider as PaperProvider } from "react-native-paper";
import {
  SettingsContextProvider,
  useSettings,
} from "src/contexts/SettingsContext";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import LocalSelector from "src/components/LocaleSelector";

const AppLayoutInternal: React.FC<AppLayoutInternalProps> = ({
  children,
}: AppLayoutInternalProps) => {
  const { locale } = useSettings();

  return (
    <PaperProvider>
      <NavigationContainer>
        <TargemProvider locale={locale} translations={translations}>
          <View style={styles.container}>
            <LocalSelector />
            <Text>
              <T message="Open up App.tsx to start working on your app!" />
            </Text>
            {children}
            <StatusBar style="auto" />
          </View>
        </TargemProvider>
      </NavigationContainer>
    </PaperProvider>
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
