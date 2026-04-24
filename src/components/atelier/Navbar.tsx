import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", k: "nav.home" },
  { id: "features", k: "nav.features" },
  { id: "menu", k: "nav.menu" },
  { id: "about", k: "nav.about" },
  { id: "gallery", k: "nav.gallery" },
  { id: "reviews", k: "nav.reviews" },
  { id: "reserve", k: "nav.reserve" },
] as const;

export const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={`font-serif text-2xl font-medium tracking-wide ${scrolled ? "text-foreground" : "text-cream"}`}>
            Atelier
          </span>
          <span className={`text-xs tracking-luxe uppercase ${scrolled ? "text-accent" : "text-gold-light"}`} style={{color: scrolled ? "hsl(var(--gold))" : "hsl(var(--gold-light))"}}>
            Café
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`text-xs uppercase tracking-luxe transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-foreground/80" : "text-cream/90"
                }`}
                style={{ ['--tw-text-opacity' as string]: 1 }}
              >
                {t(l.k)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className={`text-xs tracking-luxe uppercase border px-3 py-1.5 transition-all hover:bg-gold hover:text-espresso hover:border-gold ${
              scrolled ? "border-foreground/30 text-foreground" : "border-cream/40 text-cream"
            }`}
            aria-label="Toggle language"
          >
            {lang === "en" ? "ع" : "EN"}
          </button>
          <button
            className={`lg:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border mt-3">
          <ul className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-luxe text-foreground/80 hover:text-gold"
                >
                  {t(l.k)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
