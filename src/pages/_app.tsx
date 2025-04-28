import { ReactElement, ReactNode } from "react";
import { AppProps } from "next/app";

type NextPageWithLayout = AppProps["Component"] & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as NextPageWithLayout).getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
