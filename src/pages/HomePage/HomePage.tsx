import React from "react";
import { T } from "react-targem";
import { Paragraph } from "react-native-paper";

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Paragraph>
      <T message="Open up App.tsx to start working on your app!" />
    </Paragraph>
  );
};
interface HomePageProps {}

export default HomePage;
