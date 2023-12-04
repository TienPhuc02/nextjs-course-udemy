import MainContentHomePage from "@/components/homepage/main-content/index.main";
import { Container } from "@mui/material";
import { sendRequestJS } from "@/utils/old.api";
export default async function HomePage() {
  // const res = await fetch("http://localhost:8000/api/v1/tracks/top", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     category: "CHILL",
  //     limit: 10,
  //   }),
  // });//axios
  // console.log("🚀 ~ file: page.tsx:15 ~ HomePage ~ res:", await res.json());
  const res = await sendRequestJS({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });
  console.log("🚀 ~ file: page.tsx:20 ~ HomePage ~ res:", res)
  return (
    <div className="home-page-main">
      <div className="main-content-slider">
        <Container>
          <MainContentHomePage />
          <MainContentHomePage />
          <MainContentHomePage />
        </Container>
      </div>
    </div>
  );
}
