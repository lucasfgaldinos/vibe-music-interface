import { Mic } from "lucide-react";

export function MoodInputGroup() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass flex p-2 rounded-full border focus-within:border-primary">
        <button
          className="mx-3 cursor-pointer hover:text-primary transition"
          type="button"
        >
          <Mic size={22} />
        </button>
        <input
          className="w-full outline-none"
          type="text"
          placeholder="Descreva sua vibe... ex: focado, animado"
        />
        <button
          className="h-9 rounded-full text-xs font-bold px-6 cursor-pointer whitespace-nowrap text-foreground bg-background hover:bg-primary hover:text-background transition"
          type="button"
        >
          DESCOBRIR MINHA VIBE
        </button>
      </div>
    </div>
  );
}
