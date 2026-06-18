import { Footer } from "../../sections/footer";
import { Hero } from "../../sections/hero";
import { MusicsContainer } from "../../sections/musics-container";
import { ProjectInfo } from "../../sections/project-info";

export function Home() {
  return (
    <div className="min-h-dvh">
      <Hero />
      <MusicsContainer />
      <ProjectInfo />

      <Footer />
    </div>
  );
}
