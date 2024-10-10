import "@/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Cairo, Roboto } from "next/font/google";
import Nav from "@/components/header/Nav";

import Providers from "../providers";
import ReduxProvider from "@/redux/ReduxProvider";

// ---- Google Fonts ------
const cairo = Cairo({ subsets: ["arabic"], weight: ["400", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "ذَكِّرِ",
  description: "هَذَا الْمَوْقِعُ ابْتِغَاءَ وَجْهِ اللَّهِ تَعَالَى، حَاوِلْ مُشَارَكَتَهُ قَدْرَ الْإِمْكَانِ.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png?v=4']
  },
};

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={locale === 'ar' ? cairo.className : roboto.className` test` `bg-white`}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ReduxProvider>
              <Nav />
              {children}
            </ReduxProvider>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
