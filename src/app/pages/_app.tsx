// pages/_app.tsx

import type { AppProps } from "next/app";

// Configuración de Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
