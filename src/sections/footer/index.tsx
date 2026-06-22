export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-30 bg-black">
      <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 md:py-8 flex justify-between font-medium text-xs text-secondary">
        <span>&#169; {currentYear} - VIBE MUSIC.</span>
        <span>
          Desenvolvido por{" "}
          <a
            className="underline"
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
