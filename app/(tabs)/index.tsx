import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-900">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link
        href={"/onboarding"}
        className="mt-4 rounded bg-red-500 text-white p-4"
      >
        Go on Boarding!
      </Link>

      <Link
        href={"/(auth)/sign-in"}
        className="mt!-4 rounded bg-red-500 text-white p-4"
      >
        Go to sign in
      </Link>

      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 rounded bg-red-500 text-white p-4"
      >
        Go to sign up
      </Link>

      <Link
        href={"/subscription/spotify"}
        className="mt-4 rounded bg-red-500 text-white p-4"
      >
        spotify subscription
      </Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "claude" },
        }}
        className="mt-4 rounded bg-red-500 text-white p-4"
      >
        Claude Max Subs
      </Link>
    </View>
  );
}
