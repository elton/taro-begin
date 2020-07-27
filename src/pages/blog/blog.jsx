import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

function Blog() {
  const [blogTitle, setBlogTitle] = useState("elton zheng");

  const gotoIndex = () => {
    Taro.navigateTo({ url: "/pages/index/index?blogTitle=" + blogTitle });
  };

  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>返回首页</Button>
    </View>
  );
}
export default Blog;
