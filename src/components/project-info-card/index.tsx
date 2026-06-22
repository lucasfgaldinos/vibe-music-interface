import type { LucideIcon } from "lucide-react";

type ProjectInfoCardProps = React.ComponentProps<"div"> & {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ProjectInfoCard({
  icon: Icon,
  title,
  description,
  ...props
}: ProjectInfoCardProps) {
  return (
    <div
      className="glass flex flex-col gap-3 p-5 border border-l-primary rounded-2xl"
      {...props}
    >
      <Icon size={28} className="text-primary" />

      <b className="uppercase">{title}</b>

      <span className="text-sm text-secondary">{description}</span>
    </div>
  );
}
