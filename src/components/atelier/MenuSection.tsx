import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const data = {
  coffee: [
    { en: "Espresso Classico", ar: "إسبريسو كلاسيك", desc: { en: "Single origin · Ethiopia", ar: "أصل واحد · إثيوبيا" }, price: 65 },
    { en: "Cortado", ar: "كورتادو", desc: { en: "Velvet milk · 1:1", ar: "حليب مخملي · ١:١" }, price: 75 },
    { en: "Flat White", ar: "فلات وايت", desc: { en: "Micro-foam silk", ar: "حرير الرغوة الناعمة" }, price: 85 },
    { en: "Cold Brew Reserve", ar: "كولد برو ريزيرف", desc: { en: "12-hour steeped", ar: "منقوع ١٢ ساعة" }, price: 95 },
  ],
  signature: [
    { en: "Saffron Gold Latte", ar: "لاتيه الزعفران الذهبي", desc: { en: "Persian saffron · raw honey", ar: "زعفران فارسي · عسل" }, price: 120 },
    { en: "Rose Cardamom Mocha", ar: "موكا الورد والهيل", desc: { en: "Damask rose · 70% cocoa", ar: "ورد دمشقي · كاكاو ٧٠٪" }, price: 115 },
    { en: "Orange Blossom Cappuccino", ar: "كابتشينو زهر البرتقال", desc: { en: "House syrup · vanilla bean", ar: "شراب البيت · فانيليا" }, price: 110 },
  ],
  desserts: [
    { en: "Pistachio Mille-Feuille", ar: "ميل فوي بالفستق", desc: { en: "Aleppo pistachio cream", ar: "كريمة فستق حلبي" }, price: 145 },
    { en: "Date & Tahini Tart", ar: "تارت التمر والطحينة", desc: { en: "Medjool · sesame caramel", ar: "مدجول · كراميل سمسم" }, price: 130 },
    { en: "Rose Petit Gâteau", ar: "بوتي غاتو الورد", desc: { en: "White chocolate · rose jelly", ar: "شوكولاتة بيضاء · جيلي ورد" }, price: 155 },
  ],
};

type Cat = keyof typeof data;

export const MenuSection = () => {
  const { t, lang } = useI18n();
  const [cat, setCat] = useState<Cat>("coffee");

  const cats: { id: Cat; k: any }[] = [
    { id: "coffee", k: "menu.cat.coffee" },
    { id: "signature", k: "menu.cat.signature" },
    { id: "desserts", k: "menu.cat.desserts" },
  ];

  return (
    <section id="menu" className="py-28 md:py-40 gradient-cream">
      <div className="container max-w-5xl">
        <div className="text-center mb-16 reveal">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">{t("menu.kicker")}</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground font-light">{t("menu.title")}</h2>
          <span className="gold-divider mt-6" />
        </div>

        <div className="flex justify-center gap-2 md:gap-8 mb-16 flex-wrap reveal">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-6 py-3 text-xs tracking-luxe uppercase transition-all duration-500 border-b ${
                cat === c.id
                  ? "border-gold text-gold"
                  : "border-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {t(c.k)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 reveal" key={cat}>
          {data[cat].map((item, i) => (
            <div
              key={i}
              className="flex items-baseline gap-4 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1 group-hover:text-gold transition-colors">
                  {lang === "ar" ? item.ar : item.en}
                </h3>
                <p className="text-sm text-muted-foreground italic">{item.desc[lang]}</p>
              </div>
              <div className="flex-1 border-b border-dotted border-border/80 mb-2" />
              <span className="font-serif text-lg text-gold tabular-nums">
                {item.price} <span className="text-xs uppercase tracking-wider text-muted-foreground">EGP</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
