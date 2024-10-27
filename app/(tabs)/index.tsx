import {Home} from "@/src/screens/Home";
import { Fragment } from "react";
import { StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </Fragment>
  );
}