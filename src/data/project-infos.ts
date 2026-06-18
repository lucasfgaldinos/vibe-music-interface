import {
  Bot,
  FileMusic,
  LayoutTemplate,
  type LucideIcon,
  Server,
} from "lucide-react";

type ProjectInfo = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const projectInfos: ProjectInfo[] = [
  {
    icon: LayoutTemplate,
    title: "Front-End",
    description:
      "Interface moderna construída com React para criar uma experiência rápida, responsiva e intuitiva.",
  },
  {
    icon: Server,
    title: "Back-End",
    description:
      "API responsável por processar o humor do usuário e buscar recomendações musicais.",
  },
  {
    icon: FileMusic,
    title: "Jamendo API",
    description:
      "Integração com o Jamendo para acessar milhões de músicas e playlists.",
  },
  {
    icon: Bot,
    title: "IA Cognitiva",
    description:
      "Modelo de IA que interpreta sentimentos e transforma emoções em estilos musicais.",
  },
];
