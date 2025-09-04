// pages/_app.js
import "../styles/globals.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter();

  // Light theme for /certificates and its subroutes
  const isLight = asPath.startsWith("/certificates");

  // Page title precedence: component static -> prop from data -> default
  const pageTitle = Component.title || pageProps.title || "AI-FIS";

  return (
    <Layout title={pageTitle} isLight={isLight}>
      <Component {...pageProps} />
    </Layout>
  );
}

