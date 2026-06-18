import { Background } from "@/components/background";
import { Footer } from "../../sections/footer";
import { Hero } from "../../sections/hero";
import { MusicsContainer } from "../../sections/musics-container";
import { ProjectInfo } from "../../sections/project-info";

export function Home() {
  return (
    <div>
      <div className="h-dvh w-full -z-10 fixed left-0 top-0">
        <Background
          raysOrigin="top-center"
          raysColor="#09a129"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={3}
          followMouse={false}
          mouseInfluence={0}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <Hero />
      <MusicsContainer />
      <ProjectInfo />

      <Footer />
    </div>
  );
}
