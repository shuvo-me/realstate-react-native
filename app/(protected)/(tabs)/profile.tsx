import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { FC } from "react";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SettingsItemPropType = {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
};

const SettingsItem: FC<SettingsItemPropType> = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}) => {
  return (
    <TouchableOpacity
      className=" flex-row flex items-center justify-between py-3"
      onPress={onPress}
    >
      <View className=" flex-row items-center gap-3">
        <Image source={icon} className=" size-6" />
        <Text className={`text-lg font-rubik-medium text-black-1 ${textStyle}`}>
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className=" size-5" />}
    </TouchableOpacity>
  );
};

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
        <View className="items-center mt-6 gap-4">
          <View className=" relative">
            <Image
              source={images.avatar}
              className=" size-44 rounded-full"
              resizeMode="contain"
            />
            <TouchableOpacity className=" absolute right-3 bottom-0">
              <Image
                source={icons.edit}
                tintColor={"#FF8000"}
                className=" size-9"
              />
            </TouchableOpacity>
          </View>
          <Text className=" font-rubik-semibold text-2xl text-black-1">
            ShuvoJsDev
          </Text>
        </View>
        <View className=" flex-col mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
