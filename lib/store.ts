import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session } from "@supabase/supabase-js";
import { Platform } from "react-native";
import { Models } from "react-native-appwrite";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthStoreType = {
  _isHydrated: boolean;
  setIsHydrated: (value: boolean) => void;
  user: Models.User | null;
  session: Session | null;
  setSession: (session: Session) => void;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    (set, get) => ({
      _isHydrated: false,
      user: null,
      session: null,
      setSession: (session) => set(() => ({ session: session })),
      setIsHydrated: (value) => {
        set({
          _isHydrated: value,
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ session: state.session }),
      storage: createJSONStorage(() =>
        Platform.OS === "web" ? localStorage : AsyncStorage
      ),
      onRehydrateStorage: (state) => {
        return () => state.setIsHydrated(true);
      },
    }
  )
);
