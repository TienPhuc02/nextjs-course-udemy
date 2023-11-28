import MainContentHomePage from "@/components/theme-registry/homepage/main-content/index.main";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <div className="home-page-main">
      <div className="main-content-slider">
        <Container>
          <MainContentHomePage />
        </Container>
      </div>
    </div>
  );
}
