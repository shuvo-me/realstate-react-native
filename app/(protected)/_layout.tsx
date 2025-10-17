import { useAuthStore } from "@/lib/store";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProtectedAppLayout = () => {
  const session = useAuthStore((state) => state.session);

  const hasRehydratedAuth = useAuthStore((state) => state._isHydrated);

  if (!hasRehydratedAuth) {
    return (
      <SafeAreaView className=" flex-1 justify-center">
        <ActivityIndicator className=" text-primary" />
      </SafeAreaView>
    );
  }

  if (!session) {
    return <Redirect href={"/signin"} />;
  }
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedAppLayout;
