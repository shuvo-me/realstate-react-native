import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className=" bg-white flex-1">
      <ScrollView contentContainerClassName="pb-16">
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

        <View className="px-5 mt-6">
          <Search />
        </View>
        <View className="my-6 gap-5  px-5">
          <View className=" flex-row items-center justify-between">
            <Text className=" text-xl font-rubik-bold text-black-1">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className=" text-base font-rubik-bold text-primary">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className=" flex-row gap-5">
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
          </View>
        </View>
        <View className="my-6 gap-5 px-5">
          <View className="flex-row items-center justify-between ">
            <Text className="text-xl font-rubik-bold text-black-1">
              Our Recommendation
            </Text>

            <TouchableOpacity>
              <Text className=" text-base font-rubik-bold text-primary">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Filters />
          </View>
          <View className="flex-row gap-5">
            <Card />
            <Card />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
