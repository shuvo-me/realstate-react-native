import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const PropertyDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>PropertyDetailsScreen: {id}</Text>
    </View>
  );
};

export default PropertyDetailsScreen;
