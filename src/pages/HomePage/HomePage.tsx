import React from "react";
import { T } from "react-targem";
import { Text } from "react-native-paper";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Text>
      <T message="Open up App.tsx to start working on your app!" />
    </Text>
  );
};
interface HomePageProps {}

export default HomePage;
