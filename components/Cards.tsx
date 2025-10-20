import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

type FeaturedCardProps = {
  onPress?: () => void;
};

export const FeaturedCard: FC<FeaturedCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="items-start flex flex-col w-60 h-80 relative"
    >
      <Image source={images.japan} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />
      <View className=" flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className=" size-3.5" />
        <Text className=" text-xs font-rubik-bold text-primary ml-1">4.4</Text>
      </View>
      <View className=" items-start absolute bottom-5 inset-x-5 gap-2.5">
        <Text
          className=" text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className=" text-base font-rubik text-white">
          Lorem, ipsum dolor.
        </Text>
        <View className=" flex-row items-center justify-between w-full">
          <Text className=" text-xl font-rubik-extrabold text-white">
            $2,500
          </Text>
          <Image source={icons.heart} className=" size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card: FC<FeaturedCardProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="px-3 py-4 rounded-2xl gap-3 shadow-lg shadow-black-1/70 bg-white flex-1"
    >
      <View className=" h-40 w-full aspect-auto rounded-2xl relative">
        <Image source={images.japan} className="size-full rounded-2xl" />
        <View className=" flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
          <Image source={icons.star} className=" size-3.5" />
          <Text className=" text-xs font-rubik-bold text-primary ml-1">
            4.4
          </Text>
        </View>
      </View>

      <View className="gap-2.5">
        <Text
          className=" text-base font-rubik-semibold text-black-1"
          numberOfLines={1}
        >
          Modern Apartment
        </Text>
        <Text className=" text-sm font-rubik text-black-3">
          Lorem, ipsum dolor.
        </Text>
        <View className=" flex-row items-center justify-between w-full">
          <Text className=" text-base font-rubik-semibold text-primary">
            $2,500
          </Text>
          <Image
            source={icons.heart}
            className="size-5"
            tintColor={"#8C8E98"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
