import { MoodInputGroup } from "../../components/mood-input-group";
import { SuggestionChip } from "../../components/suggestion-chip";
import { moodSuggestions } from "../../data/mood-suggestions";

export function Hero() {
  return (
    <section>
      <h1 className="font-black text-5xl md:text-5xl lg:text-8xl text-center">
        VIBE MUSIC
      </h1>
      <h3 className="text-secondary text-center mt-8 lg:text-lg">
        Descubra músicas perfeitas para o seu humor usando IA
      </h3>

      <div className="mt-10">
        <MoodInputGroup />
      </div>

      <div className="mx-auto flex flex-wrap justify-center gap-4 lg:gap-6 mt-10">
        {moodSuggestions.length > 0 &&
          moodSuggestions.map((item) => (
            <SuggestionChip key={item.name}>{item.name}</SuggestionChip>
          ))}
      </div>
    </section>
  );
}
