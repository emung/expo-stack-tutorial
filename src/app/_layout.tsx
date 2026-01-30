import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Stack />
    </React.Fragment>
  );
}
