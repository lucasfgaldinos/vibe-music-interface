export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-30 bg-black">
      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-8 flex justify-between text-secondary/50 font-medium text-xs">
        <span>&#169; {currentYear} - VIBE MUSIC.</span>
        <span>
          Desenvolvido por{" "}
          <a
            className="hover:text-primary/50 underline"
            href="https://www.linkedin.com/in/lucas-fernando-galdino-da-silva/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Galdino
          </a>
        </span>
      </div>
    </footer>
  );
}
