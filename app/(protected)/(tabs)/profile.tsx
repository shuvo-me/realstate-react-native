import { settings } from "@/constants/data";
import icons from "@/constants/icons";
import { useAuthStore } from "@/lib/store";
import { getUser, signOut } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React, { FC } from "react";
import {
  ActivityIndicator,
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
  const router = useRouter();
  const { data, isPending, error } = useQuery({
    queryKey: ["profile-data"],
    queryFn: getUser,
  });

  async function handleSignout() {
    const res = await signOut();
    if (res) {
      useAuthStore.persist.clearStorage();
      router.replace("/signin");
    }
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex-grow"
      >
        {error ? (
          <View className="flex-1 justify-center items-center">
            <Text className=" text-danger text-lg font-rubik-bold">
              {error.message}
            </Text>
          </View>
        ) : isPending ? (
          <View className="flex-1 justify-center">
            <ActivityIndicator color={"#FF8000"} />
          </View>
        ) : data?.user ? (
          <View className="px-5 pb-32">
            <View className=" mt-5 flex-row items-center justify-between">
              <Text className=" font-rubik-semibold text-xl">Profile</Text>
              <Image
                source={icons.bell}
                className=" size-5"
                resizeMode="contain"
              />
            </View>
            <View className="items-center mt-6 gap-4">
              <View className=" relative">
                <Image
                  source={{ uri: "https://avatar.iran.liara.run/public/boy" }}
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
              <Text className=" font-rubik-semibold text-2xl text-black-1 capitalize">
                {data?.user.email}
              </Text>
            </View>
            <View className=" flex-col mt-10 border-t border-t-primary/10 pt-6">
              <SettingsItem icon={icons.calendar} title="My Bookings" />
              <SettingsItem icon={icons.wallet} title="Payments" />
            </View>
            <View className=" mt-5 border-t pt-6 border-primary/10">
              {settings.slice(2).map((item, index) => (
                <SettingsItem key={index} {...item} />
              ))}
            </View>
            <View className=" flex-col mt-10 border-t border-t-primary/10 pt-6">
              <SettingsItem
                icon={icons.logout}
                title="Sign out"
                showArrow={false}
                textStyle=" text-danger"
                onPress={handleSignout}
              />
            </View>
          </View>
        ) : (
          <View className="flex-1 items-center justify-center ">
            <Text>
              Noting to show 📵
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
