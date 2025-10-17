import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React, { FC } from "react";
import { Image, ImageSourcePropType } from "react-native";
type TabIconPropType = {
  focused: boolean;
  icon: ImageSourcePropType;
};

const TabIcon: FC<TabIconPropType> = ({ focused, icon }) => (
  <Image
    source={icon}
    className="size-6"
    resizeMode="contain"
    tintColor={focused ? "#FF8000" : "#666876"}
  />
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: "Rubik-Medium",
        },
        headerShown: false,
        tabBarActiveTintColor: "#FF8000",
        tabBarInactiveTintColor: "#666876",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          position: "absolute",
          borderTopColor: "#FF80005A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
