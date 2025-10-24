import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className=" bg-white flex-1">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        numColumns={2}
        contentContainerClassName="pb-20"
        columnWrapperClassName="flex gap-4 px-5"
        ListHeaderComponent={
          <>
            <View className="flex-row items-center justify-between px-5 pt-4">
              <View className="flex-row items-center gap-1">
                <Image
                  source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
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
            <View className="mt-6 gap-5  px-5">
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
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={() => <FeaturedCard />}
                horizontal
                contentContainerClassName="gap-5"
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View className="mt-6 gap-5 px-5">
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
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
