import React from "react";

const DetailTackPage = (props: any) => {
  console.log("🚀 ~ file: page.tsx:4 ~ DetailTackPage ~ props:", props);
  // { params: { slug: 'phuc' }, searchParams: {} } //bản chất biến này là truyền thông qua props
  const { params } = props;
  console.log("🚀 ~ file: page.tsx:6 ~ DetailTackPage ~ params:", params);
  //{ slug: 'phuc' }
  return <div>DetailTackPage </div>;
};

export default DetailTackPage;
