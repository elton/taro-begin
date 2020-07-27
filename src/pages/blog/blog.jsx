import React from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

function Blog() {
  const gotoIndex = () => {
    Taro.navigateTo({ url: "/pages/index/index" });
  };

  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>返回首页</Button>
    </View>
  );
}
export default Blog;
