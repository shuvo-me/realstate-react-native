import { Models } from "react-native-appwrite";
import { create } from "zustand";

type AuthStoreType = {
  isLoggedIn: boolean;
  user: Models.User | null;
  loading: boolean;
  refetch?: (params: Record<string, string | undefined>) => Promise<void>;
};

export const useAuthStore = create<AuthStoreType>((setState) => ({
  isLoggedIn: false,
  user: null,
  loading: false,
}));
