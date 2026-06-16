import { Mic } from "lucide-react";

export function MoodInputGroup() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass flex p-2 rounded-full border border-secondary/20">
        <button
          className="mx-3 cursor-pointer text-light hover:text-primary transition"
          type="button"
        >
          <Mic size={22} />
        </button>
        <input
          className="w-full outline-none text-light"
          type="text"
          placeholder="Descreva sua vibe... ex: focado, animado"
        />
        <button
          className="h-9 rounded-full bg-light text-xs text-dark font-bold px-6 cursor-pointer whitespace-nowrap hover:bg-primary hover:text-light transition"
          type="button"
        >
          DESCOBRIR MINHA VIBE
        </button>
      </div>
    </div>
  );
}
