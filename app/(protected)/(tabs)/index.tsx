import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between px-5 pt-4">
          <View className="flex-row items-center gap-1">
            <Image
              source={images.avatar}
              className=" rounded-full size-11"
              resizeMode="contain"
            />
            <View>
              <Text className=" font-rubik text-xs text-black-3">
                Good Morning
              </Text>
              <Text className=" font-rubik-medium text-black-1 text-base">
                SHuvo
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={icons.bell}
              className=" size-6"
              resizeMode="contain"
            />
          </View>
        </View>
        <Search />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
