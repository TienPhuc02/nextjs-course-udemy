"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
const DetailTackPage = (props: any) => {
  const searchParams = useSearchParams()
 
  const audio = searchParams.get('audio')
  console.log("🚀 ~ file: page.tsx:4 ~ DetailTackPage ~ props:", props);
  // { params: { slug: 'phuc' }, searchParams: {} } //bản chất biến này là truyền thông qua props
  const { params } = props;
  console.log("🚀 ~ file: page.tsx:6 ~ DetailTackPage ~ params:", params);
  //{ slug: 'phuc' }
  return <div>DetailTackPage </div>;
};

export default DetailTackPage;
