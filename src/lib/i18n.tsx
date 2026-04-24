import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "ar";

type Dict = Record<string, { en: string; ar: string }>;

export const dict: Dict = {
  // Nav
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.features": { en: "Features", ar: "المميزات" },
  "nav.menu": { en: "Menu", ar: "القائمة" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.gallery": { en: "Gallery", ar: "المعرض" },
  "nav.reviews": { en: "Reviews", ar: "آراء" },
  "nav.reserve": { en: "Reserve", ar: "احجز" },

  // Hero
  "hero.eyebrow": { en: "Cairo · Est. 2024", ar: "القاهرة · تأسس ٢٠٢٤" },
  "hero.title1": { en: "Atelier Café", ar: "أتيليه كافيه" },
  "hero.tagline": { en: "Where Art Meets Coffee", ar: "حيث يلتقي الفن بالقهوة" },
  "hero.subtitle": {
    en: "An intimate Parisian-inspired sanctuary in the heart of Cairo, crafting rare beans, artisan pastries, and unforgettable moments.",
    ar: "ملاذ مستوحى من باريس في قلب القاهرة، نُبدع أجود حبوب البن والحلويات الفنية ولحظات لا تُنسى.",
  },
  "hero.menu": { en: "View Menu", ar: "تصفح القائمة" },
  "hero.book": { en: "Book a Table", ar: "احجز طاولة" },
  "hero.scroll": { en: "Scroll", ar: "اسحب" },

  // Features
  "feat.title": { en: "The Atelier Experience", ar: "تجربة الأتيليه" },
  "feat.kicker": { en: "Our Craft", ar: "حرفتنا" },
  "feat.1.t": { en: "Rare Beans", ar: "حبوب نادرة" },
  "feat.1.d": { en: "Single-origin micro-lots, hand-selected from estates across Ethiopia, Yemen and Colombia.", ar: "حبوب أحادية المصدر، مختارة يدوياً من مزارع إثيوبيا واليمن وكولومبيا." },
  "feat.2.t": { en: "Artisan Desserts", ar: "حلويات فنية" },
  "feat.2.d": { en: "French patisserie reimagined with Levantine soul — pistachio, rose, orange blossom.", ar: "حلويات فرنسية بروح شرقية: فستق، ورد، وزهر برتقال." },
  "feat.3.t": { en: "Velvet Ambiance", ar: "أجواء راقية" },
  "feat.3.d": { en: "Brass, marble and warm candlelight. Every detail composed for slow, beautiful afternoons.", ar: "نحاس ورخام وإضاءة دافئة. كل تفصيلة مُصممة لأمسيات هادئة." },
  "feat.4.t": { en: "Signature Rituals", ar: "طقوس مميزة" },
  "feat.4.d": { en: "From the saffron-gold latte to our siphon brews, each cup is a quiet performance.", ar: "من لاتيه الزعفران الذهبي إلى السيفون، كل فنجان أداء صامت." },

  // Menu
  "menu.kicker": { en: "La Carte", ar: "القائمة" },
  "menu.title": { en: "A Curated Menu", ar: "قائمة مُختارة" },
  "menu.cat.coffee": { en: "Coffee", ar: "قهوة" },
  "menu.cat.signature": { en: "Signature", ar: "مميزة" },
  "menu.cat.desserts": { en: "Desserts", ar: "حلويات" },

  // About
  "about.kicker": { en: "Our Story", ar: "قصتنا" },
  "about.title": { en: "Crafted with Devotion", ar: "صُنع بشغف" },
  "about.p1": {
    en: "Atelier Café was born from a quiet obsession — that a single cup of coffee, served with grace, can change the rhythm of an entire day. Hidden in the streets of Zamalek, our atelier marries Parisian café culture with the warmth of Cairo hospitality.",
    ar: "وُلد أتيليه كافيه من شغف هادئ — بأن فنجان قهوة واحد، يُقدَّم برقيّ، قادر على تغيير إيقاع يوم كامل. مخفي في شوارع الزمالك، يجمع أتيليهنا بين ثقافة المقاهي الباريسية ودفء الضيافة المصرية.",
  },
  "about.p2": {
    en: "Every bean is roasted in-house. Every pastry baked at dawn. Every gesture rehearsed — so that yours feels effortless.",
    ar: "كل حبة بن تُحمّص في مكاننا. كل حلوى تُخبز عند الفجر. كل لفتة مدروسة — كي تشعر بالراحة دون عناء.",
  },
  "about.stat1": { en: "Origins", ar: "أصول" },
  "about.stat2": { en: "Daily Pastries", ar: "حلويات يومية" },
  "about.stat3": { en: "Years of Craft", ar: "سنوات حرفة" },

  // Gallery
  "gal.kicker": { en: "Atmosphere", ar: "أجواء" },
  "gal.title": { en: "Moments in Frame", ar: "لحظات مُخلّدة" },

  // Reviews
  "rev.kicker": { en: "Testimonials", ar: "آراء العملاء" },
  "rev.title": { en: "Whispered Compliments", ar: "كلمات من قلب الضيوف" },
  "rev.1": { en: "The most beautiful café in Cairo. Every detail is a love letter to coffee.", ar: "أجمل مقهى في القاهرة. كل تفصيلة رسالة حب للقهوة." },
  "rev.1n": { en: "Layla H.", ar: "ليلى ح." },
  "rev.2": { en: "I came for an espresso and stayed three hours. The ambiance is hypnotic.", ar: "جئت لإسبريسو وبقيت ثلاث ساعات. الأجواء ساحرة." },
  "rev.2n": { en: "Omar S.", ar: "عمر س." },
  "rev.3": { en: "Their saffron latte is poetry. Service is impeccably warm and discreet.", ar: "لاتيه الزعفران شعر بحد ذاته. الخدمة دافئة ومتقنة." },
  "rev.3n": { en: "Nadia K.", ar: "نادية ك." },

  // Reservation
  "res.kicker": { en: "Reservations", ar: "الحجوزات" },
  "res.title": { en: "Reserve Your Table", ar: "احجز طاولتك" },
  "res.sub": { en: "We hold a limited number of tables each evening. Kindly book in advance.", ar: "نحتفظ بعدد محدود من الطاولات كل مساء. يُرجى الحجز مسبقاً." },
  "res.name": { en: "Full Name", ar: "الاسم الكامل" },
  "res.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "res.date": { en: "Date", ar: "التاريخ" },
  "res.time": { en: "Time", ar: "الوقت" },
  "res.guests": { en: "Guests", ar: "عدد الضيوف" },
  "res.submit": { en: "Confirm Reservation", ar: "تأكيد الحجز" },
  "res.success": { en: "Thank you. Your table awaits.", ar: "شكراً لك. طاولتك بانتظارك." },

  // Footer
  "foot.visit": { en: "Visit", ar: "زورونا" },
  "foot.address": { en: "26 Brazil St., Zamalek, Cairo", ar: "٢٦ شارع البرازيل، الزمالك، القاهرة" },
  "foot.hours": { en: "Hours", ar: "ساعات العمل" },
  "foot.hours1": { en: "Mon — Thu  ·  8:00 — 23:00", ar: "الإثنين — الخميس  ·  ٨:٠٠ — ٢٣:٠٠" },
  "foot.hours2": { en: "Fri — Sun  ·  9:00 — 01:00", ar: "الجمعة — الأحد  ·  ٩:٠٠ — ٠١:٠٠" },
  "foot.follow": { en: "Follow", ar: "تابعونا" },
  "foot.rights": { en: "© 2024 Atelier Café. All rights reserved.", ar: "© ٢٠٢٤ أتيليه كافيه. جميع الحقوق محفوظة." },
};

interface Ctx { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof dict) => string; dir: "ltr" | "rtl"; }
const I18nCtx = createContext<Ctx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = (k: keyof typeof dict) => dict[k]?.[lang] ?? String(k);
  const dir = lang === "ar" ? "rtl" : "ltr";
  return <I18nCtx.Provider value={{ lang, setLang, t, dir }}>{children}</I18nCtx.Provider>;
};

export const useI18n = () => {
  const c = useContext(I18nCtx);
  if (!c) throw new Error("useI18n must be inside I18nProvider");
  return c;
};
