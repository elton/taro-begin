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
  const [articleList, setArticleList] = useState([]);

  const gotoIndex = () => {
    Taro.navigateTo({ url: "/pages/index/index?blogTitle=" + blogTitle });
  };

  const getBlogList = () => {
    Taro.request({
      url: "https://apiblog.jspang.com/default/getArticleList",
    }).then((res) => {
      console.log(res.data);
      setArticleList(res.data.list);
    });
  };

  return (
    <View>
      <Text>Blog Page</Text>
      <Button onClick={gotoIndex}>返回首页</Button>
      <Button onClick={getBlogList}>获取博客列表</Button>
      {girls.map((item, index) => {
        return (
          <View key={index}>
            {item.id}:{item.name}
          </View>
        );
      })}

      {articleList.map((item, index) => {
        return <View key={index}>- {item.title}</View>;
      })}
    </View>
  );
}
export default Blog;
