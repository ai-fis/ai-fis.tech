// components/Layout.js
import Head from "next/head";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children, title = "AI-FIS", isLight = false }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${isLight ? "bg-white text-black" : "bg-gray-950 text-white"} min-h-screen flex flex-col`}>
        <SiteHeader />
        <main id="main" className="flex-1 mx-auto w-full max-w-6xl px-4">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
