import styles from "./styles.module.css";

type SectionTitleProps = React.ComponentProps<"h2">;

export function SectionTitle({ children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={`${styles.h2} h-12 mb-4 font-bold text-light text-2xl relative uppercase`}
      {...props}
    >
      {children}
    </h2>
  );
}
