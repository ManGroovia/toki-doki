import type { AppProps } from "next/app";
import '../styles/style.scss'
import {Montserrat} from '@next/font/google'
import Header from "@/components/Header";


const mainFont = Montserrat({
  weight: ['400', '700', '500'],
  subsets: ["latin"]
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <header className={mainFont.className}>
      <Component {...pageProps} />
    </header>
  );
 
}
