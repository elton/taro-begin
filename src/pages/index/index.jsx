import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

function Index() {
  const [userName, setUserName] = useState("Hello World!!!!");

  return (
    <View>
      <Text>{userName}</Text>
    </View>
  );
}

export default Index;
