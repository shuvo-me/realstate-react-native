import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";

export const config = {
  platform: "realstate",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function signin() {
  try {
    const redirectURI = Linking.createURL("/");
    const res = account.createOAuth2Token({
      provider: OAuthProvider.Google,
      success: redirectURI,
      failure: redirectURI,
    });

    if (!res) throw new Error("Can not create OAuth2Token");

    const browserRes = await openAuthSessionAsync(res.toString(), redirectURI);

    if (browserRes.type !== "success")
      throw new Error("Can not open Auth Session Async");

    const url = new URL(browserRes.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Can not find secret & userId");

    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Failed to create session");

    return session;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function signout() {
  try {
    await account.deleteSession({
      sessionId: "current",
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getUser() {
  try {
    const res = await account.get();
    if (!res.$id) {
      throw new Error("Can not get user");
    }

    const userAvatar = avatar.getInitials(res.name);
    return { ...res, avatar: userAvatar.toString() };
  } catch (error) {
    console.error(error);
    return false;
  }
}
