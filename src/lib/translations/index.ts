import { common } from "./common";
import { home } from "./home";
import { marketing } from "./marketing";
import { auth } from "./auth";
import { app } from "./app";

/** English source string -> Arabic. Missing keys fall back to English. */
export const arabic: Record<string, string> = {
  ...common,
  ...home,
  ...marketing,
  ...auth,
  ...app,
};
