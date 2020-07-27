import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";

function Blog() {
  const girls = [
    { id: 1, name: "谢大脚" },
    { id: 2, name: "刘英" },
    { id: 3, name: "王小蒙" },
    { id: 4, name: "香秀" },
  ];
  const [blogTitle, setBlogTitle] = useState("elton zheng");

  const gotoIndex = () => {
    Taro.navigateTo({ url: "/pages/index/index?blogTitle=" + blogTitle });
  };

  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>返回首页</Button>
      {girls.map((item, index) => {
        return (
          <View key={index}>
            {item.id}:{item.name}
          </View>
        );
      })}
    </View>
  );
}
export default Blog;
