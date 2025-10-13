import { Redirect, Stack } from "expo-router";

const ProtectedAppLayout = () => {
  const session = false;
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
