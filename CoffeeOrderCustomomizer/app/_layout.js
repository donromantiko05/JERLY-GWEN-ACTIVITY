import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#957a6a",
        },
        headerTintColor: "#e0cfcf",
        headerTitleStyle: {
          fontWeight: "700",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Campus Coffee",
        }}
      />

      <Stack.Screen
        name="receipt"
        options={{
          title: "Order Receipt",
        }}
      />
    </Stack>
  );
}