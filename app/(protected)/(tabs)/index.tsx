import { signout } from "@/lib/appwrite";
import { useAuthStore } from "@/lib/store";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();

  async function handleSignout() {
    const res = await signout();
    if (res) {
      useAuthStore.persist.clearStorage();
      router.replace("/signin");
    }
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleSignout}>
        <Text>Sign out</Text>
      </TouchableOpacity>
      <Text className=" text-red-500">HomeScreen </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
