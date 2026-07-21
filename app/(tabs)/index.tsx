import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500"></Text>

      <Link href={"/onboarding"} className="mt-4 rounded bg-red-500  p-4">
        Go on Boarding!
      </Link>

      <Link href={"/(auth)/sign-in"} className="mt!-4 rounded bg-red-500  p-4">
        Go to sign in
      </Link>

      <Link href={"/(auth)/sign-up"} className="mt-4 rounded bg-red-500  p-4">
        Go to sign up
      </Link>

      <Link
        href={"/subscriptions/spotify"}
        className="mt-4 rounded bg-red-500  p-4"
      >
        spotify subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-red-500  p-4"
      >
        Claude Max Subs
      </Link>
    </SafeAreaView>
  );
}
