import { categories } from "@/constants/data";
import cn from "@/lib/cn";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [filter, setFilter] = useState(params.filter || "All");

  const onSelectFilter = (category: string) => {
    if (category === filter) {
      setFilter("All");
      router.setParams({ filter: "All" });
    } else {
      setFilter(category);
      router.setParams({ filter: category });
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => onSelectFilter(item.category)}
          key={index}
          className={cn(
            " py-2 px-5 rounded-full mx-3 first:ml-0 ",
            item.category === filter ? " bg-primary " : "bg-primary/10 "
          )}
        >
          <Text
            className={cn(
              "text-sm",
              item.category === filter
                ? "text-white font-rubik-semibold"
                : "text-black-1 font-rubik"
            )}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
