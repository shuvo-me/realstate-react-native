import { useAuthStore } from "@/lib/store";
import { Redirect, Stack } from "expo-router";

const ProtectedAppLayout = () => {
  const session = useAuthStore((state) => state.session);

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
