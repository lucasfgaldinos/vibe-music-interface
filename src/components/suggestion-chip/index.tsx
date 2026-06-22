type SuggestionChipProps = React.ComponentProps<"button">;

export function SuggestionChip({
  children,
  type = "button",
  ...props
}: SuggestionChipProps) {
  return (
    <button
      className="glass border cursor-pointer px-3 py-1 rounded-full text-xs uppercase font-medium text-secondary hover:text-primary hover:border-primary transition"
      {...props}
    >
      {children}
    </button>
  );
}
