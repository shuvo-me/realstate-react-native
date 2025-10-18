import icons from "@/constants/icons";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className=" mt-5 flex-row items-center justify-between">
          <Text className=" font-rubik-semibold text-xl">Profile</Text>
          <Image source={icons.bell} className=" size-5" resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
