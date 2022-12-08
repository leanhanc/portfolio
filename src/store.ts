import { atom } from "nanostores";

export type Locale = "es" | "en";

export const localeAtom = atom<Locale>("en");

export const toggleLocale = () => {
  if (localeAtom.get() === "es") {
    localeAtom.set("en");
  } else {
    localeAtom.set("es");
  }
};
