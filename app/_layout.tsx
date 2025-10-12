import "@/assets/css/global.css";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Semibold": require("../assets/fonts/Rubik-Semibold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded && !error?.message) {
      // SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(protected)" />
    </Stack>
  );
}
