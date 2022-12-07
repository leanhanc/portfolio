import { atom } from "nanostores";

export type Locale = "es" | "en";

const localeAtom = atom<Locale>("es");

export const currentLocale = localeAtom.get();
export const toggleLocale = () => {
  if (localeAtom.get() === "es") {
    localeAtom.set("en");
  } else {
    localeAtom.set("es");
  }
};
