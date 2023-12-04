import MainContentHomePage from "@/components/homepage/main-content/index.main";
import { Container } from "@mui/material";
import { sendRequest } from "@/utils/api";
export default async function HomePage() {
  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  });
  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  });
  const parties = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "PARTY", limit: 10 },
  });
  return (
    <div className="home-page-main">
      <div className="main-content-slider">
        <Container>
          <MainContentHomePage data={chills?.data ?? []} title={"Chill"} />
          <MainContentHomePage data={workouts?.data ?? []} title={"Workout"} />
          <MainContentHomePage data={parties?.data ?? []} title={"Party"} />
        </Container>
      </div>
    </div>
  );
}
