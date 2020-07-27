import React, { useState, useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import "./index.scss";

import Child from "./components/child.jsx";

function Index() {
  const [userName, setUserName] = useState("Hello World!!!!");
  const [blogTitle, setBlogTitle] = useState("");

  useEffect(() => {
    // getCurrentInstance().router.params 获取到传入的参数
    setBlogTitle(getCurrentInstance().router.params.blogTitle);
  }, []);

  return (
    <View>
      <Text>{userName}</Text>
      <Child userName={userName}></Child>
      <View>{blogTitle}</View>
    </View>
  );
}

export default Index;
