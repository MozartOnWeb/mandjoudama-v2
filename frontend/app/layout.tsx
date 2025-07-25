import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
// import * as demo from "@/sanity/lib/demo";

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
// export async function generateMetadata(): Promise<Metadata> {
//   const { data: settings } = await sanityFetch({
//     query: settingsQuery,
//     // Metadata should never contain stega
//     stega: false,
//   });
//   const title = settings?.title || demo.title;
//   const description = settings?.description || demo.description;

//   const ogImage = resolveOpenGraphImage(settings?.ogImage);
//   let metadataBase: URL | undefined = undefined;
//   try {
//     metadataBase = settings?.ogImage?.metadataBase
//       ? new URL(settings.ogImage.metadataBase)
//       : undefined;
//   } catch {
//     // ignore
//   }
//   return {
//     metadataBase,
//     title: {
//       template: `%s | ${title}`,
//       default: title,
//     },
//     description: toPlainText(description),
//     openGraph: {
//       images: ogImage ? [ogImage] : [],
//     },
//   };
// }

export const metadata = {
  title: {
    template: `%s | `,
    default: "Mandjou Dama",
  },
  description: "",
};

const jetbrainsMono = localFont({
  src: "../public/fonts/JetBrainsMono-Variable.woff2",
  variable: "--jetbrains-mono",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body>
        <section className="pt-24">
          {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
          {/* <Toaster /> */}
          {/* {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )} */}
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          {/* <SanityLive onError={handleError} /> */}
          <section className="main_section">
            <Header />
            <main className="">{children}</main>
            <Footer />
          </section>
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
