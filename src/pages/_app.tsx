import Footer from '@/components/Footer';
import { ibmthai, salapao } from '@/fonts';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${salapao.variable} ${ibmthai.variable} font-sans`}>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
