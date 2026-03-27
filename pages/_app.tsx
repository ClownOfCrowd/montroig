import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${playfair.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
