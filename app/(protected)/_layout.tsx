import { Stack } from "expo-router";

const ProtectedAppLayout = () => {
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
