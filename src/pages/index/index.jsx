import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

import Child from "./components/child.jsx";

function Index() {
  const [userName, setUserName] = useState("Hello World!!!!");

  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
    </View>
  );
}

export default Index;
