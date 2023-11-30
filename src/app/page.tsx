import MainContentHomePage from "@/components/homepage/main-content/index.main";
import { Container } from "@mui/material";

export default function HomePage() {
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
