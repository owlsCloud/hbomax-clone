import { HBOProvider } from "../components/HBOProvider";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <HBOProvider>
      <Component {...pageProps} />
    </HBOProvider>
  );
}

export default MyApp;
