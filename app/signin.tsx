import icons from "@/constants/icons";
import images from "@/constants/images";
import { signin } from "@/lib/appwrite";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { Models } from "react-native-appwrite";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SigninScreen() {
  const setSession = useAuthStore((state) => state.setSession);
  const router = useRouter();

  const handleSignin = async () => {
    const res = await signin();

    if ((res as Models.Session)?.$id) {
      setSession(res as Models.Session);
      router.replace("/");
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className=" bg-accent-100 flex-1">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className=" w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className=" uppercase font-rubik text-black-2 text-base text-center">
            Welcome to Real Scout
          </Text>
          <Text className=" text-3xl font-rubik-semibold text-black-1 text-center mt-3 capitalize">
            Let’s get you closer {"\n"}
            to <Text className=" text-primary">your ideal home</Text>
          </Text>
          <Text className=" uppercase font-rubik text-black-2 text-lg text-center mt-3">
            Login to Real Scout with Google
          </Text>
          <TouchableOpacity
            onPress={handleSignin}
            className=" rounded-full bg-white shadow-md shadow-zinc-300 mt-5 flex"
          >
            <View className="flex-row items-center justify-center gap-3">
              <Image
                source={icons.google}
                className="size-5"
                resizeMode="contain"
              />
              <Text className=" text-black-1 font-rubik-medium text-lg text-center py-5">
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
