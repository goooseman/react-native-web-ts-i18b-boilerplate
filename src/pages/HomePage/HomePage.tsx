import React from "react";
import { Text, View } from "react-native";
import { T } from "react-targem";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <View>
      <Text>
        <T message="Open up App.tsx to start working on your app!" />
      </Text>
    </View>
  );
};
interface HomePageProps {}

export default HomePage;
