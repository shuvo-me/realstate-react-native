import icons from "@/constants/icons";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);
  const debouncedSearch = useDebouncedCallback((text) => {
    router.setParams({ query: text });
  }, 500);

  const onSearch = () => {
    setSearch(search);
    debouncedSearch(search);
  };

  return (
    <View className=" flex-row items-center justify-between flex-1  relative">
      <Image
        source={icons.search}
        className="size-5 absolute left-3 top-1/2 -translate-y-1/2 z-10"
      />
      <TouchableOpacity
        className=" absolute right-3 top-1/2 -translate-y-1/2 z-10"
        onPress={onSearch}
      >
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search for anything"
        className=" border flex-1 rounded-lg bg-accent-100   border-primary/10 py-4 font-rubik text-sm text-black-3 focus:border-primary/50 pl-10"
      />
    </View>
  );
};

export default Search;
